import React from 'react';
import { Grommet } from 'grommet';
import Layout from '@/components/layout';
import Meta from '@/components/Meta';
import { ThemeProvider } from 'styled-components';
import './styles/reset.css';

export default function MyApp({ Component, pageProps }) {
  const customTheme = {
    global: {
      input: {
        font: {
          weight: '400',
        },
      },
    },
    formField: {
      label: {
        margin: '16px 0',
        font: {
          weight: '600',
        },
      },
      margin: {
        top: '48px'
      },
    },
  };
  return (
    <Layout>
      <Meta />
      <Grommet theme={customTheme}>
        <ThemeProvider
          theme={{
            palette: {
              primary: '#7D4CDB',
              second: '#6FFFB0',
              gray: '#212529',
            },
          }}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </Grommet>
    </Layout>
  );
}
