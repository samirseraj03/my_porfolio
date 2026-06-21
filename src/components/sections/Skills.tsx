import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAngular,
  FaLaravel,
  FaLinux,
  FaApple,
  FaWordpress,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaChartLine,
  FaProjectDiagram,
  FaLightbulb,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiFastapi,
  SiDotnet,
  SiPandas,
  SiIonic,
  SiR,
  SiCapacitor,
  SiHtml5,
  SiMapbox,
  SiDjango,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiGooglecloud,
  SiNotion,
  SiJira,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';


// ─── Styled Components ───────────────────────────────────────────────────────

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
 padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.04);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
    border-color: ${theme.colors.accent}20;
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.2rem, 2.5vw, 1.45rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 10px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};

  svg {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
    flex-shrink: 0;
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const SkillName = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SkillTag = styled.span`
  font-size: clamp(0.6rem, 1vw, 0.7rem);
  color: ${theme.colors.accent};
  background: rgba(246, 177, 122, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.8;
  flex-shrink: 0;
`;


// Data moved inside component for translation


// ─── Component ───────────────────────────────────────────────────────────────

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: [
        { name: 'Angular', icon: <FaAngular />, tag: 'Front End' },
        { name: 'React', icon: <FaReact />, tag: 'Front End' },
        { name: 'JavaScript (JS)', icon: <SiJavascript />, tag: 'Front End' },
        { name: 'TypeScript', icon: <SiTypescript />, tag: 'Front End' },
        { name: 'HTML + CSS', icon: <SiHtml5 />, tag: 'Front End' },
        { name: 'MapBox', icon: <SiMapbox />, tag: 'Front End' },
      ],
    },
    {
      title: 'Mobile',
      icon: <SiFlutter />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter />, tag: 'Mobile' },
        { name: 'Dart', icon: <SiDart />, tag: 'Mobile' },
        { name: 'Ionic', icon: <SiIonic />, tag: 'Mobile' },
        { name: 'Capacitor', icon: <SiCapacitor />, tag: 'Mobile' },
      ],
    },
    {
      title: 'Backend',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Laravel', icon: <FaLaravel />, tag: 'Backend' },
        { name: 'Node.js', icon: <FaNodeJs />, tag: 'Backend' },
        { name: 'FastAPI', icon: <SiFastapi />, tag: 'Backend' },
        { name: 'Django', icon: <SiDjango />, tag: 'Backend' },
        { name: 'Python', icon: <SiPython />, tag: 'Backend' },
        { name: 'C#', icon: <SiDotnet />, tag: 'Backend' },
      ],
    },
    {
      title: t('skills.cat_databases'),
      icon: <FaDatabase />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, tag: 'Database' },
        { name: 'MySQL / SQL', icon: <SiMysql />, tag: 'Database' },
        { name: 'MongoDB', icon: <SiMongodb />, tag: 'Database' },
        { name: 'Supabase', icon: <SiSupabase />, tag: 'Database' },
        { name: 'Firebase', icon: <SiFirebase />, tag: 'Database' },
      ],
    },
    {
      title: 'Cloud, DevOps & OS',
      icon: <FaCloud />,
      skills: [
        { name: 'Google Cloud', icon: <SiGooglecloud />, tag: 'Cloud' },
        { name: 'Azure', icon: <VscAzure />, tag: 'Cloud' },
        { name: 'Docker', icon: <FaDocker />, tag: 'DevOps' },
        { name: 'Git', icon: <FaGitAlt />, tag: 'Control de Versiones' },
        { name: 'Linux / Ubuntu', icon: <FaLinux />, tag: 'OS' },
        { name: 'macOS', icon: <FaApple />, tag: 'OS' },
      ],
    },
    {
      title: t('skills.cat_data_eco'),
      icon: <FaChartLine />,
      skills: [
        { name: 'R', icon: <SiR />, tag: 'Data Science' },
        { name: 'Pandas', icon: <SiPandas />, tag: 'Data Science' },
        { name: 'Power BI', icon: <TbBrandGoogleAnalytics />, tag: 'Analytics' },
        { name: t('skills.s_econometrics'), icon: <FaChartLine />, tag: 'Economía' },
        { name: t('skills.s_viability'), icon: <FaProjectDiagram />, tag: 'Negocio' },
        { name: t('skills.s_micro_macro'), icon: <TbBrandGoogleAnalytics />, tag: 'Economía' },
      ],
    },
    {
      title: 'Project Management & CMS',
      icon: <FaProjectDiagram />,
      skills: [
        { name: 'WordPress', icon: <FaWordpress />, tag: 'CMS' },
        { name: 'Notion', icon: <SiNotion />, tag: 'Project Management' },
        { name: 'Jira', icon: <SiJira />, tag: 'Project Management' },
        { name: 'Sistemas ERP', icon: <FaProjectDiagram />, tag: 'Management' },
      ],
    },
    {
      title: t('skills.cat_soft'),
      icon: <FaBrain />,
      skills: [
        { name: t('skills.s_discipline'), icon: <FaBrain />, tag: 'Personal' },
        { name: t('skills.s_adaptability'), icon: <FaLightbulb />, tag: 'Personal' },
        { name: t('skills.s_creativity'), icon: <FaLightbulb />, tag: 'Personal' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        {t('skills.title')}
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>

              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <SkillName>{skill.name}</SkillName>
                    <SkillTag>{skill.tag}</SkillTag>
                    <span className="sr-only">
                      {`${skill.name} - ${category.title} skill`}
                    </span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;