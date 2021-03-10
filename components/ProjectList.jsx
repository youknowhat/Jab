import React from 'react'
import ProjectCard from './ProjectCard';

const PROJECT_DATA = [
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  },
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  },
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  },
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  },
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  },
  {
    "title": "This is just title for test",
    "description": "This is just description for test",
    "categorys": ["development, design"]
  }
]

const projectListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}

const ProjectList = () => {
  return (
    <div style={projectListStyle}>
      {PROJECT_DATA.map(({ title, description, categorys }) => (
        <ProjectCard key={title} title={title} description={description} categorys={categorys} />  
      ))}
    </div>
  )
}

export default ProjectList
