import React from 'react';
import { Header, Heading, Nav } from 'grommet';
import Link from 'next/link';

export default function GNB() {
  return (
    <Header pad="8px 16px 8px 16px" background="brand">
      <Heading level="1" margin="none" size="36px">
        <Link href="/">
          <a href="/" style={{ color: '#fff', fontSize: '36px' }}>
            Jab
          </a>
        </Link>
      </Heading>
      <Nav direction="row" background="brand" pad="12px 0">
        {true ? (
          <>
            <Link href="/login">
              <a href="/login">로그인</a>
            </Link>
            <Link href="/signup">
              <a href="/signup" style={{ marginLeft: '16px' }}>회원가입</a>
            </Link>
          </>
        ) : (
          <>
            <Link href={`/user/${user._id}`}>
              <a href={`/user/${user._id}`}>프로필</a>
            </Link>
            <button onClick={handleLogout} style={{ marginLeft: '16px' }}>
              로그아웃
            </button>
          </>
        )}
      </Nav>
    </Header>
  );
}
