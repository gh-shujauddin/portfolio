import React from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCard';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 480px) {
    margin-top: 24px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({ active, theme }) => active && `
        background-color: ${theme.primary + 20};
    `}

    &:hover {
        background-color: ${({ theme }) => theme.primary + 8};
    }

    @media screen and (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;

const Projects = ({openModal,setOpenModal}) => {
    const [active, setActive] = React.useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Here are some of my skills on which I have been working on for the path 2 years.
                </Desc>

                <ToggleGroup>
                    {active === 'all' ?
                        (<ToggleButton active values="all" onClick={() => setActive("all")}>ALL</ToggleButton>) :
                        (<ToggleButton values="all" onClick={() => setActive("all")}>ALL</ToggleButton>)
                    }
                    <Divider />
                    {active === 'web app' ?
                        (<ToggleButton active values="web" onClick={() => setActive("web app")}>WEB APPS</ToggleButton>) :
                        (<ToggleButton values="web" onClick={() => setActive("web app")}>WEB APPS</ToggleButton>)
                    }
                    <Divider />
                    {active === 'android app' ?
                        (<ToggleButton active values="android" onClick={() => setActive("android app")}>ANDROID APPS</ToggleButton>) :
                        (<ToggleButton values="android" onClick={() => setActive("android app")}>ANDROID APPS</ToggleButton>)
                    }
                    <Divider />
                    {active === 'cross-platform app' ?
                        (<ToggleButton active values="cross-platform" onClick={() => setActive("cross-platform app")}>CROSS-PLATFORM APPS</ToggleButton>) :
                        (<ToggleButton values="cross-platform" onClick={() => setActive("cross-platform app")}>CROSS-PLATFORM APPS</ToggleButton>)
                    }

                </ToggleGroup>
                <CardContainer>
                    {active === 'all' && projects
                        .map((project) => (
                            <ProjectCard project={project}  openModal={openModal} setOpenModal={setOpenModal}/>
                        ))}
                    {projects
                        .filter((item) =>
                            item.category === active)
                        .map((project) => (
                            <ProjectCard project={project}  openModal={openModal} setOpenModal={setOpenModal}/>
                        )
                        )}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;