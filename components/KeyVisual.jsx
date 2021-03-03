import React from 'react';
import { Heading, Paragraph } from 'grommet';

const KeyVisual = () => {
  return (
    <div>
      <Heading level='1' margin={{ top: '48px', bottom: '16px', horizontal: 'none' }} size='24px' textAlign='center'>
        Volunteer for COVID-19 projects
      </Heading>
      <Heading level='2' margin={{ vertical: '8px', horizontal: 'auto' }} size='16px' textAlign='center'>
      We help people find the resources they need.
      </Heading>
      <Paragraph size='small' margin={{ top: '8px', bottom: '48px', horizontal: 'auto' }} textAlign='center'>
      We are 750+ projects and 16,700+ volunteers strong.
      </Paragraph>
    </div>
  );
};

export default KeyVisual;