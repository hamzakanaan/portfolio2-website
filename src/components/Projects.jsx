import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 4px;
    background: ${props => props.theme.gradient};
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.textSecondary};

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }
`;

const Tech = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    
    &:not(:last-child)::after {
      margin-left: 0.8rem;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background: ${props => props.theme.isDark ? '#111111' : '#f8f9fa'};
  color: ${props => props.theme.text};
  border: none;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.isDark ? '#1a1a1a' : '#f1f3f5'};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IntenseProxy",
      description: "Proxy provider website including authentication, dashboard and dynamic features",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      techStack: ["React", "Bootstrap", "Styled Components"],
      liveDemo: "https://intense-proxy.demo",
      github: "https://github.com/yourusername/intense-proxy"
    },
    {
      id: 2,
      title: "SAAPE Coin",
      description: "Site for a BSC based coin called SAAPE",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80",
      techStack: ["Vue", "React", "Netlify"],
      liveDemo: "https://saape-coin.demo",
      github: "https://github.com/yourusername/saape-coin"
    },
    {
      id: 3,
      title: "Blockchain Explorer: Hive Attention Tokens",
      description: "Blockchain explorer open source project (block explorer) for transactions",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=80",
      techStack: ["React", "TypeScript", "GitHub API"],
      liveDemo: "https://hive-explorer.demo",
      github: "https://github.com/yourusername/hive-explorer"
    },
    {
      id: 4,
      title: "GitProfile",
      description: "A nice look to GitHub profiles using features such as user stats, authentication using Firebase and charts using the GitHub API",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80",
      techStack: ["React", "Redux", "Firebase", "GitHub API"],
      liveDemo: "https://git-profile.demo",
      github: "https://github.com/yourusername/git-profile"
    },
    {
      id: 5,
      title: "MovieDB",
      description: "TV application, displays different categories of movies/shows (popular, in theaters, trending etc.) alongside a search option using TheMovieDB API for the data",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
      techStack: ["React.js", "Redux", "TheMovieDB API"],
      liveDemo: "https://moviedb.demo",
      github: "https://github.com/yourusername/moviedb"
    },
    {
      id: 6,
      title: "Soundify",
      description: "Music search application, displays information about artists such as albums, biography, songs that are available on youtube and much more using TheAudioDB API",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80",
      techStack: ["Vue.js", "Vuex", "TheAudioDB API"],
      liveDemo: "https://soundify.demo",
      github: "https://github.com/yourusername/soundify"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>FEATURED PROJECTS</SectionTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <Tech key={index}>{tech}</Tech>
                ))}
              </TechStack>
              <ProjectLinks>
                <LinkButton href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live demo</span>
                </LinkButton>
                <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </LinkButton>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects; 