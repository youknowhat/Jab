import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { all } from '@/middlewares/index';
import { extractUser } from '@/lib/api-helpers';
import { insertUser, findUserByEmail } from '@/db/index';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';

const handler = nc();
handler.use(all);

handler.post(async (req, res) => {
  const { name, password } = req.body;
  const email = normalizeEmail(req.body.email);

  if (!isEmail(email)) {
    res.status(400).send('잘못된 이메일입니다.');
    return;
  }

  if (!password || !name) {
    res.status(400).send('모두 입력해주세요.');
    return;
  }

  if (await findUserByEmail(req.db, email)) {
    res.status(403).send('이미 사옹중인 이메일입니다.');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await insertUser(req.db, {
    email, password: hashedPassword, name,
  });

  req.logIn(user, (err) => {
    if (err) {
      throw err;
    }
    
    res.status(201).json({
      user: extractUser(req.user),
    });
  });
});

export default handler;
