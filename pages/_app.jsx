import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import { Grommet } from 'grommet';

export default function MyApp({ Component, pageProps }) {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
  return (
    <Layout>
      <Head>
        <link rel = "stylesheet"href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <title>Jab</title>
      </Head>
      <Grommet theme={theme} >
        <Component {...pageProps} />
      </Grommet>
    </Layout>
  );
}
