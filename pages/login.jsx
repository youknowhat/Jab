import React, { useState, useEffect } from 'react';
import { Heading, Form, FormField, Button } from 'grommet';
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

  async function handleSubmit(e) {
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
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <Heading level="2" margin={{ vertical: '24px' }} fill>
        로그인
        </Heading>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        <FormField
          type="email"
          name="email"
          label="이메일"
        />
        <FormField
          type="password"
          name="password"
          label="비밀번호"
        />
        <Button
          type="submit"
          label="완료"
          margin={{ top: '48px' }}
          size="large"
          primary
          fill
        />
        <Link href="/forget-password">
          <a style={{ display: 'block', marginTop: '40px' }}>
            비밀번호를 잊어버렸어요
          </a>
        </Link>
      </Form>
    </>
  );
};

export default LoginPage;
