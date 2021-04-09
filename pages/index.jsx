import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import KeyVisual from '../components/KeyVisual';
import ProjectList from '../components/ProjectList';

const IndexPage = () => {
  const [user] = useCurrentUser();
  return (
    <>
      <KeyVisual />
      <ProjectList />
    </>
  );
};

export default IndexPage;
