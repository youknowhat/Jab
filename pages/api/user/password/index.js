import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { all } from '@/middlewares/index';
import { updateUserById } from '@/db/index';

const handler = nc();
handler.use(all);

handler.put(async (req, res) => {
  if (!req.user) {
    res.json(401).send('권한이 없습니다.');
    return;
  }

  const { oldPassword, newPassword } = req.body;
  const validPassword = await bcrypt.compare(oldPassword, req.user.password)

  if (!validPassword) {
    res.status(401).send('잘못된 패스워드를 입력했습니다.');
  }

  const password = await bcrypt.hash(newPassword, 10);
  await updateUserById(req.db, req.user._id, { password });

  res.end('ok');
});

export default handler;
