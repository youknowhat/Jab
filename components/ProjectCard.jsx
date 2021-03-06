import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Paragraph } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';

const ProjectCard = ({ title, description, categorys = [] }) => {
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
      'WebkitLineClamp': '2',
      'WebkitBoxOrient': 'vertical',
      'whiteSpace': 'normal',
      'overflow': 'hidden',
      'textOverflow': 'ellipsis',
      'margin': '0 0 20px 0',
      'wordBreak': 'break-all'
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
        <Heading style={cardTextSyle.title} level="3">{title}</Heading>
        <Paragraph style={cardTextSyle.description}>{description}</Paragraph>
        {categorys.length > 0 && categorys.map((label) => {
          <span style={badgeStyle}>{label}</span>  
        })}
      </CardBody>

      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
