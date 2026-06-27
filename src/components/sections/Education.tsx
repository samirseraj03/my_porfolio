import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaUniversity, FaLaptopCode, FaServer } from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';

// ─── Data ────────────────────────────────────────────────────────────────────

interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  icon: React.ReactNode;
}

// Data logic is inside the component to support translation

// ─── Keyframes ───────────────────────────────────────────────────────────────

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px ${theme.colors.accent}40, 0 0 20px ${theme.colors.accent}20;
  }
  50% {
    box-shadow: 0 0 16px ${theme.colors.accent}60, 0 0 40px ${theme.colors.accent}30;
  }
`;

// ─── Styled Components ───────────────────────────────────────────────────────

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
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

const SectionIntro = styled(motion.p)`
  text-align: center;
  font-size: clamp(0.95rem, 1.5vw, 1.15rem);
  max-width: 750px;
  line-height: 1.8;
  opacity: 0.85;
  margin: ${theme.spacing.xl} auto ${theme.spacing.xl};
  color: ${theme.colors.textLight};
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  margin-top: ${theme.spacing.lg};

  /* Vertical timeline line */
  &::before {
    display: none;
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${theme.colors.accent}60 10%,
      ${theme.colors.accent}60 90%,
      transparent
    );

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div) <{ index: number }>`
  position: relative;
  padding-left: 0;
  padding-bottom: ${theme.spacing.xl};

  &:last-child {
    padding-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 50%;

    ${(props) =>
    props.index % 2 === 0
      ? `
          margin-left: 0;
          padding-right: calc(${theme.spacing.xl} + 40px);
          padding-left: 0;
        `
      : `
          margin-left: 50%;
          padding-left: calc(${theme.spacing.xl} + 40px);
          padding-right: 0;
        `}
  }
`;

const TimelineDot = styled.div<{ index: number }>`
  position: absolute;
  top: 8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${theme.colors.accent};
  border: 3px solid ${theme.colors.primary};
  z-index: 2;
  animation: ${pulseGlow} 3s ease-in-out infinite;
  display: none;
  align-items: center;
  justify-content: center;
  left: 10px;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    ${({ index }) =>
    index % 2 === 0
      ? `
          left: 100%;
          transform: translateX(-50%);
        `
      : `
          left: 0;
          transform: translateX(-50%);
        `}
  }
`;
const TimelineCard = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(246, 177, 122, 0.12);
    border-color: ${theme.colors.accent}30;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg} calc(${theme.spacing.lg} + 0.5rem);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 14px;
  background: ${theme.colors.gradient.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: ${theme.colors.textDark};
  box-shadow: 0 4px 16px rgba(246, 177, 122, 0.25);
`;

const CardTitleGroup = styled.div`
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  color: ${theme.colors.light};
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.3;
`;

const CardInstitution = styled.span`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: ${theme.colors.accent};
  font-weight: 500;
  display: block;
`;

const CardPeriod = styled.span`
  display: inline-block;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  color: ${theme.colors.textLight};
  opacity: 0.7;
  background: ${theme.colors.glass.card};
  padding: 3px 12px;
  border-radius: 20px;
  margin-top: 6px;
  font-weight: 500;
`;

const CardDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: ${theme.spacing.md};
  text-align: left;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${theme.spacing.md};
  text-align: left;
`;


const HighlightItem = styled.li`
  font-size: clamp(0.8rem, 1.3vw, 0.9rem);
  line-height: 1.6;
  opacity: 0.8;
  padding: 4px 0;
  padding-left: 20px;
  position: relative;
  text-align: left;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;           /* Default: items de la derecha */
    top: 4px;
    color: ${theme.colors.accent};
    font-size: 0.9em;
  }
`;


const SkillBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: ${theme.spacing.sm};
`;

const SkillBadge = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};
  border: 1px solid transparent;

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    border-color: ${theme.colors.accent};
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const { t } = useTranslation();

  const educationData: EducationEntry[] = [
    {
      title: t('education.items.eco.title'),
      institution: t('education.items.eco.institution'),
      period: t('education.items.eco.period'),
      description: t('education.items.eco.desc'),
      highlights: [
        t('education.items.eco.h1'),
        t('education.items.eco.h2'),
        t('education.items.eco.h3'),
      ],
      skills: [
        'R',
        'Python',
        'Pandas',
        'Power BI',
        t('skills.s_econometrics'),
        t('skills.s_viability'),
        'Optimización Matemática',
        t('skills.s_micro_macro'),
      ],
      icon: <FaUniversity />,
    },
    {
      title: t('education.items.daw.title'),
      institution: t('education.items.daw.institution'),
      period: t('education.items.daw.period'),
      description: t('education.items.daw.desc'),
      highlights: [
        t('education.items.daw.h1'),
        t('education.items.daw.h2'),
        t('education.items.daw.h3'),
      ],
      skills: [
        'Laravel',
        'Node.js',
        'Angular',
        'React',
        'JavaScript/TypeScript',
        'Dart',
        'Bases de Datos (SQL/NoSQL)',
        'Git/GitHub',
      ],
      icon: <FaLaptopCode />,
    },
    {
      title: t('education.items.smr.title'),
      institution: t('education.items.smr.institution'),
      period: t('education.items.smr.period'),
      description: t('education.items.smr.desc'),
      highlights: [
        t('education.items.smr.h1'),
        t('education.items.smr.h2'),
        t('education.items.smr.h3'),
      ],
      skills: [
        'Linux/Ubuntu',
        'macOS',
        'Redes Locales',
        'Hardware',
        'Sistemas Operativos',
        'Infraestructura',
        'Bash/Terminal',
      ],
      icon: <FaServer />,
    },
  ];

  return (
    <EducationSection id="education" role="region" aria-label="Educación y Formación">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        {t('education.title')}
      </SectionTitle>

      <SectionIntro
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {t('education.description')}
      </SectionIntro>

      <TimelineContainer>
        {educationData.map((entry, index) => (
          <TimelineItem
            key={index}
            index={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <TimelineDot index={index} />
            <TimelineCard>
              <CardHeader>
                <IconWrapper aria-hidden="true">{entry.icon}</IconWrapper>
                <CardTitleGroup>
                  <CardTitle>{entry.title}</CardTitle>
                  <CardInstitution>{entry.institution}</CardInstitution>
                  <CardPeriod>{entry.period}</CardPeriod>
                </CardTitleGroup>
              </CardHeader>

              <CardDescription>{entry.description}</CardDescription>

              <HighlightsList>
                {entry.highlights.map((highlight, hIndex) => (
                  <HighlightItem key={hIndex}>{highlight}</HighlightItem>
                ))}
              </HighlightsList>

              <SkillBadgesContainer>
                {entry.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </SkillBadgesContainer>
            </TimelineCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </EducationSection>
  );
};

export default Education;
