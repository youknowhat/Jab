import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Paragraph } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';

const ProjectCard = () => {
  const badgeStyle = {
    display: 'inline-block',
    marginRight: '4px',
    padding: '4px 10px',
    borderRadius: '16px',
    backgroundColor: '#ddd',
  };

 const cardTextSyle = {
    title: {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'margin': '0 0 4px 0',
      'word-break': 'keep-all',
      'color': '#111',
    },
    description: {
      'display': '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
      'white-space': 'normal',
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'margin': '0 0 20px 0',
      'word-break': 'break-all'
    },
 }

  return (
    <Card height="medium" margin="medium" width="auto" background="light-1">
      <CardHeader
        pad="medium"
        height="small"
        style={{
          background: 'url("https://via.placeholder.com/500") no-repeat 50%/cover',
        }}
      ></CardHeader>
      <CardBody pad="medium" style={{ display: 'block' }}>
        <Heading style={cardTextSyle.title} level="3">Thidescrsalkdfjalksjflkasjfdlkasklfdaslkdfjalksasdfasfdasfasfdasdfasdfsafdasdfasdfadfasdfdfjaljdflkasiption</Heading>
        <Paragraph style={cardTextSyle.description}>This is a descrsalkdfjalksjflkasjfdlkasklfdaslkdfjalksasdfasfdasfasfdasdfasdfsafdasdfasdfadfasdfdfjaljdflkasiption</Paragraph>
        <span style={badgeStyle}>뱃지</span>
        <span style={badgeStyle}>뱃asdfasdf</span>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
