import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '@/hooks/index';

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useCurrentUser();

  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('다시 시도해주세요!');
    }
  }

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <h2>로그인</h2>
      <form onSubmit={onSubmit}>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">로그인</button>
        <Link href="/forget-password">
          <a>비밀번호를 잊어버렸어요</a>
        </Link>
      </form>
    </>
  );
};

export default LoginPage;
