import React, { useState, useEffect } from 'react';
import { Heading, Form, FormField, Button } from 'grommet';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '@/hooks/index';
import Dialog from '../components/Dialog';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      > 
        <Heading level="2" margin={{ vertical: '24px' }} fill>
          회원가입
        </Heading>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        <FormField
          name="name"
          label="닉네임"
        />
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
        <FormField
          type="password"
          name="checkPassword"
          label="비밀번호 확인"
        />
        <Button
          type="submit"
          label="완료"
          margin={{ top: '48px' }}
          size="large"
          primary
          fill
        />
        <Dialog title="타이틀입니다" confirmText="화긴" cancelText="취소하기">다이얼로그만드는aasdf중</Dialog>
      </Form>
    </>
  );
};

export default SignupPage;
