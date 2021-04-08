import React from 'react';
import { Header, Button, Heading, Nav, Anchor } from 'grommet';
import { Notification, Home, ChatOption } from 'grommet-icons';
import Link from 'next/link';

export default function GNB() {
  return (
    <Header
      pad='0 16px 0 24px'
      background='brand'
    >
      <Heading level="1" margin="none" size="36px">
        <Link href="/"><a href="/" style={{ color: "#fff", fontSize: '36px' }}>Jab</a></Link>
      </Heading>
      <Nav direction="row" background="brand" pad="12px 0">
        {true ? (
          <>
            <Link href="/login">
              <Anchor icon={<Home />} hoverIndicator />
            </Link>
            <Link href="/signup">
              <Anchor icon={<Notification />} hoverIndicator />
            </Link>
          </>
        ) : (
          <>
            <Link href={`/user/${user._id}`}>
              <Anchor icon={<ChatOption />} hoverIndicator />
            </Link>
            <Button
              icon={<Notification />}
              onClick={handleLogout}
              label="Logout"
            />
          </>
        )}
      </Nav>
    </Header>
  );
}
