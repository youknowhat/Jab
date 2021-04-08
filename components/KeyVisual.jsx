import React from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  margin: 48px auto 16px;
  text-align: center;
  font-size: 24px;
`

const Heading2 = styled.h2`
  margin: 8px auto;
  font-size: 16px;
  text-align: center;
`

const Paragraph = styled.p`
  margin: 8px auto 48px;
  font-size: 14px;
  text-align: center;
`

const KeyVisual = () => {
  return (
    <>
      <Heading1>
        Volunteer for COVID-19 projects
      </Heading1>

      <Heading2>
      We help people find the resources they need.
      </Heading2>

      <Paragraph>
      We are 750+ projects and 16,700+ volunteers strong.
      </Paragraph>
    </>
  );
};

export default KeyVisual;