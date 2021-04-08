import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const PROJECT_DATA = [
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
  {
    title: 'This is just title for test',
    description: 'This is just description for test',
    categorys: ['development, design'],
  },
];

const ProjectListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  padding-bottom: 80px;
`

const ProjectList = () => {
  return (
    <ProjectListStyles>
      {PROJECT_DATA.map(({ title, description, categorys }, index) => (
        <ProjectCard
          key={title + index}
          title={title}
          description={description}
          categorys={categorys}
        />
      ))}
    </ProjectListStyles>
  );
};

export default ProjectList;
