import bcrypt from 'bcryptjs';
import nc from 'next-connect';
import { sendMail } from '@/lib/mail';
import { database } from '@/middlewares/index';
import {
  findUserByEmail, updateUserById, findAndDeleteTokenByIdAndType, insertToken,
} from '@/db/index';

const handler = nc();

handler.use(database);

handler.post(async (req, res) => {
  const user = await findUserByEmail(req.db, req.body.email);
  if (!user) {
    res.status(401).send('해당 아이디는 존재하지 않습니다.');
    return;
  }

  const token = await insertToken(req.db, {
    creatorId: user._id,
    type: 'passwordReset',
    expireAt: new Date(Date.now() + 1000 * 60 * 20),
  });

  const msg = {
    to: user.email,
    from: process.env.EMAIL_FROM,
    subject: '비밀번호 재설정',
    html: `
      <div>
        <p>안녕하세요, ${user.name}님</p>
        <p><a href="${process.env.WEB_URI}/forget-password/${token._id}">링크</a>를 통해 비밀번호를 재설정해주세요.</p>
      </div>
      `,
  };
  await sendMail(msg);
  res.end('ok');
});

handler.put(async (req, res) => {
  // password reset
  if (!req.body.password) {
    res.status(400).send('비밀번호를 입력해주세요.');
    return;
  }

  const deletedToken = await findAndDeleteTokenByIdAndType(req.db, req.body.token, 'passwordReset');

  if (!deletedToken) {
    res.status(403).send('만료된 링크입니다.');
    return;
  }
  const password = await bcrypt.hash(req.body.password, 10);
  await updateUserById(req.db, deletedToken.creatorId, { password });

  res.end('ok');
});

export default handler;
