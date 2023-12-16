import { Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 20};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 8px;
  max-width: 100%;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -10px;
  backround-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project , setOpenModal}) => {
  return (
    <Card onClick={() => setOpenModal({state: true, project: project})}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.members?.map((member) => (
          <Tooltip title={member.name} placement="top">
            <Avatar src={member.img} onClick={() => window.open(member.github, "_blank")} />
          </Tooltip>
        ))}
      </Members>
    </Card>
  );
}

export default ProjectCard; 