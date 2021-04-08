import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import Link from 'next/link';
import styled from 'styled-components';

const CardTitle = styled.h3`
  overflow: 'hidden',
  text-overflow: 'ellipsis',
  margin: '0 0 4px 0',
  word-break: 'keep-all',
  color: '#111',
`;

const CardDesc = styled.p`
  display: '-webkit-box',
  -webkit-line-clamp: '2',
  -webkit-box-orient: 'vertical',
  white-space: 'normal',
  overflow: 'hidden',
  text-overflow: 'ellipsis',
  margin: '0 0 20px 0',
  word-break: 'break-all',
`;

const CardBadge = styled.span`
  display: 'inline-block',
  margin-right: '4px',
  padding: '4px 10px',
  border-radius: '16px',
  background-color: '#ddd',
`

const ProjectCard = ({ title, description, categorys = [] }) => {
  return (
    <Card
      height="medium"
      margin="medium"
      width="auto"
      height="auto"
      background="light-1"
    >
      <Link href="/asdaf">
        <a href="/asdaf">
          <CardHeader
            pad="medium"
            height="small"
            style={{
              background:
                'url("https://via.placeholder.com/500") no-repeat 50%/cover',
            }}
          />

          <CardBody pad="medium" style={{ display: 'block' }}>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{description}</CardDesc>
            {categorys.length > 0 &&
              categorys.map((label) => {
                <CardBadge>{label}</CardBadge>;
              })}
          </CardBody>
        </a>
      </Link>

      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <CopyToClipboard
          text="/"
          onCopy={() => alert('링크가 복사되었습니다.')}
        >
          <Button icon={<ShareOption color="plain" />} hoverIndicator>
            링크 공유하기
          </Button>
        </CopyToClipboard>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
