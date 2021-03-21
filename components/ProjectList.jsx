import React from 'react';
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

const projectListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
  paddingBottom: '80px'
};

const ProjectList = () => {
  return (
    <div style={projectListStyle}>
      {PROJECT_DATA.map(({ title, description, categorys }, index) => (
        <ProjectCard
          key={title + index}
          title={title}
          description={description}
          categorys={categorys}
        />
      ))}
    </div>
  );
};

export default ProjectList;
