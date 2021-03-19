import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useCurrentUser } from '@/hooks/index';

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);
  const nameRef = useRef();
  const profilePictureRef = useRef();
  const [msg, setMsg] = useState({ message: '', isError: false });

  useEffect(() => {
    nameRef.current.value = user.name;
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (isUpdating) {
      return;
    }

    if (profilePictureRef.current.files[0]) { 
      formData.append('profilePicture', profilePictureRef.current.files[0]);
    }

    setIsUpdating(true);

    const formData = new FormData();
    formData.append('name', nameRef.current.value);

    const res = await fetch('/api/user', {
      method: 'PATCH',
      body: formData,
    });

    if (res.status === 200) {
      const userData = await res.json();

      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: '변경되었습니다.' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
    setIsUpdating(false);
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();

    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    
    e.currentTarget.oldPassword.value = '';
    e.currentTarget.newPassword.value = '';

    const res = await fetch('/api/user/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: '비밀번호가 변경되었습니다.' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  async function sendVerificationEmail() {
    const res = await fetch('/api/user/email/verify', {
      method: 'POST',
    });

    if (res.status === 200) {
      setMsg({ message: '인증 메일을 발송했습니다.' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  return (
    <>
      <Head>
        <title>설정</title>
      </Head>
      <section>
        <h2>프로필</h2>
        {
          msg.message
            ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>
                {msg.message}
              </p> 
            : null
        }
        <form onSubmit={handleSubmit}>
          {!user.emailVerified ? (
            <p>
              인증되지 않은 이메일입니다.
              {' '}
              {/* eslint-disable-next-line */}
                <a role="button" onClick={sendVerificationEmail}>
                  인증 메일 발송
                </a>
            </p>
          ) : null}
          <label htmlFor="name">
            이름
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="이름"
              ref={nameRef}
            />
          </label>
          <label htmlFor="avatar">
            프로필 이미지
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              ref={profilePictureRef}
            />
          </label>
          <button disabled={isUpdating} type="submit">저장</button>
        </form>
        <form onSubmit={handleSubmitPasswordChange}>
          <label htmlFor="oldpassword">
            기존 비밀번호
            <input
              type="password"
              name="oldPassword"
              id="oldpassword"
              required
            />
          </label>
          <label htmlFor="newpassword">
            새 비밀번호
            <input
              type="password"
              name="newPassword"
              id="newpassword"
              required
            />
          </label>
          <button type="submit">비밀번호 변경</button>
        </form>
      </section>
    </>
  );
};

const SettingPage = () => {
  const [user] = useCurrentUser();

  if (!user) {
    return (
      <>
        <p>로그인이 필요합니다.</p>
      </>
    );
  }
  return (
    <>
      <h1>설정</h1>
      <ProfileSection />
    </>
  );
};

export default SettingPage;
