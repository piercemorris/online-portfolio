import React from 'react';
import styled from 'styled-components';

const Project = ({ name, desc, tech, link}) => {
  return ( 
    <div className="project">
      <ProjectName>{name}</ProjectName>
      <ProjectDesc>{desc}</ProjectDesc>
      <ProjectTech>{tech}</ProjectTech>
      <CodeLink href={link}>GitHub</CodeLink>
    </div>
  );
}

const ProjectName = styled.div`
  font-size: 2.4rem;
  text-align: center;
  margin: 2rem;
`;

const ProjectDesc = styled.div`
  padding: 0rem 2rem;
  font-size: 1.8rem;
`;

const ProjectTech = styled.div`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const CodeLink = styled.a`
  position: absolute;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.6rem;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0%;
`;
 
export default Project;