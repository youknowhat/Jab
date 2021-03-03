import React from 'react';
import { Header, Box, Button, Heading, Nav, Anchor, Icons } from 'grommet';
import { Notification, Home, ChatOption } from 'grommet-icons';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function GNB() {
  const [user, { mutate }] = useCurrentUser();

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };

  return (
    <Header
      pad='medium'
      margin='none'
      background='brand'
    >
      <Heading level="1" margin="none" size="48px">
        <Link href="/"><span style={{ color: "#fff" }}>Jab</span></Link>
      </Heading>
      <Nav direction="row" background="brand" pad="medium">
        {!user ? (
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
