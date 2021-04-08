import React from 'react';
import GNB from './GNB';

export default function Layout({ children }) {
  return (
    <>
      <GNB />
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  );
}
