import React from 'react';
import { useCurrentUser } from '@/hooks/index';

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
    </>
  );
};

export default IndexPage;
