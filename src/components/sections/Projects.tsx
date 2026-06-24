import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Palmira from '../../assets/palmira.webp';
import Eutorus from '../../assets/eutorus.webp';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

// Projects array moved inside component to support translations
const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "MapFont",
      description: t('projects.mapfont_desc'),
      image: "https://play-lh.googleusercontent.com/9dKelmL9quPe32a7DyqP_sHJaL93J7B3X3KTWrYrBwU9Q_sjjPxwSVJ4K3dVqMWfW1GnZSqDZ2devjgTxRDASCY=w480-h960-rw",
      techStack: ["Ionic", "Angular", "Android", "Mobile App", "Mapbox", "Capacitor"],
      githubUrl: "https://github.com/samirseraj03/mapfont",
      liveUrl: "https://map-font.vercel.app/tabs/fonts",
    },
    {
      id: 2,
      title: "Workspace-Roundtrip",
      description: t('projects.workspace_desc'),
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
      techStack: ["Desktop Environment", "Window Management", "Productivity", "JavaScript", "Extension Ubuntu"],
      githubUrl: "https://github.com/samirseraj03",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "DataSimulation API",
      description: t('projects.dataapi_desc'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      techStack: ["Python", "FastAPI", "Pandas", "REST API"],
      githubUrl: "https://github.com/samirseraj03",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Recollir Enquestes (Private)",
      description: t('projects.encuestas_desc'),
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400",
      techStack: ["PHP", "Backend", "Data Processing", "Laravel", "Html", "CSS3", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Bowling Scoring",
      description: t('projects.bowling_desc'),
      image: "https://images.unsplash.com/photo-1511516104860-264663d231de?auto=format&fit=crop&q=80&w=400",
      techStack: ["Software Engineering", "Algorithms", "OOP", "Unity"],
      githubUrl: "https://github.com/samirseraj03/bowling",
      liveUrl: "https://samirseraj03.github.io/bowling/",
    },
    {
      id: 6,
      title: "Gestió Parking",
      description: t('projects.parking_desc'),
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400",
      techStack: ["Management System", "Logistics", "Full-stack", "Python"],
      githubUrl: "https://github.com/samirseraj03/Gestio_parking",
      liveUrl: "#",
    },

    {
      id: 7,
      title: "Eutorus.com",
      description: t('projects.eutorus_desc'),
      image: Eutorus,
      techStack: ["WordPress", "Web Design", "SEO", "Optimization"],
      githubUrl: "#",
      liveUrl: "https://eutorus.com",
    },

    {
      id: 8,
      title: "Sabores Palmira",
      description: t('projects.sabores_desc'),
      image: Palmira,
      techStack: ["WordPress", "Web Design", "Local SEO", "Digital Catalog"],
      githubUrl: "#",
      liveUrl: "https://saborespalmira.com",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          {t('projects.title')}
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage
                  imageUrl={project.image}
                  role="img"
                  aria-label={`Screenshot of ${project.title}`}
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {/* El botón de GitHub solo se muestra si hay una URL real */}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    )}
                    {/* El botón de Live Site solo se muestra si hay una URL real */}
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span className="sr-only">Live site</span>
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;