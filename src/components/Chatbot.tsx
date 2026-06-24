import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../styles/theme';
import { useState, useRef, useEffect } from 'react';
import { FaBrain, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

interface QuickQuestion {
  label: string;
  answer: string;
}

// ─── Animations ──────────────────────────────────────────────────────────────

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`;

const typingDots = keyframes`
  0%, 20% { opacity: 0.3; }
  50% { opacity: 1; }
  80%, 100% { opacity: 0.3; }
`;

// ─── Styled Components ───────────────────────────────────────────────────────

const ChatToggle = styled.button<{ isOpen: boolean }>`
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem; /* MOVIDO A LA IZQUIERDA */
  z-index: 1000;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(246, 177, 122, 0.4);
  transition: all ${theme.transitions.default};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 32px rgba(246, 177, 122, 0.5);
  }

  ${({ isOpen }) =>
    !isOpen &&
    `animation: ${pulse} 3s ease-in-out infinite;`}
`;

const ChatWindow = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 5.5rem;
  left: 1.5rem; /* MOVIDO A LA IZQUIERDA */
  z-index: 999;
  width: min(380px, calc(100vw - 2rem));
  max-height: min(520px, calc(100vh - 8rem));
  border-radius: 20px;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background: rgba(42, 45, 62, 0.97);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(246, 177, 122, 0.15);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(246, 177, 122, 0.08);
  animation: ${slideUp} 0.35s ease-out;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, rgba(246, 177, 122, 0.15) 0%, rgba(42, 45, 62, 0.6) 100%);
  border-bottom: 1px solid rgba(246, 177, 122, 0.1);
`;

const HeaderAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${theme.colors.gradient.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textDark};
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const HeaderInfo = styled.div`
  flex: 1;

  h4 {
    color: ${theme.colors.light};
    font-size: 0.95rem;
    margin: 0;
    font-weight: 600;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
  }
`;

const OnlineDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  margin-right: 0.35rem;
  vertical-align: middle;
`;

const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 250px;
  max-height: 350px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(246, 177, 122, 0.2);
    border-radius: 4px;
  }
`;

const MessageBubble = styled.div<{ sender: 'bot' | 'user' }>`
  max-width: 85%;
  padding: 0.75rem 1rem;
  border-radius: ${({ sender }) =>
    sender === 'bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px'};
  background: ${({ sender }) =>
    sender === 'bot'
      ? 'rgba(255, 255, 255, 0.08)'
      : theme.colors.gradient.accent};
  color: ${({ sender }) =>
    sender === 'bot' ? theme.colors.textLight : theme.colors.textDark};
  align-self: ${({ sender }) => (sender === 'bot' ? 'flex-start' : 'flex-end')};
  font-size: 0.88rem;
  line-height: 1.55;
  animation: ${fadeIn} 0.3s ease-out;
  word-break: break-word;
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  align-self: flex-start;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px 16px 16px 16px;

  span {
    width: 7px;
    height: 7px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    animation: ${typingDots} 1.4s ease-in-out infinite;

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
`;

const QuickQuestionsArea = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(42, 45, 62, 0.5);
  max-height: 160px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(246, 177, 122, 0.15);
    border-radius: 3px;
  }
`;

const QuickButton = styled.button`
  background: rgba(246, 177, 122, 0.1);
  color: ${theme.colors.accent};
  border: 1px solid rgba(246, 177, 122, 0.2);
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  white-space: pre-wrap;
  text-align: left;

  &:hover {
    background: rgba(246, 177, 122, 0.2);
    border-color: ${theme.colors.accent};
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }
`;


// ─── Component ───────────────────────────────────────────────────────────────

export const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions: QuickQuestion[] = [
    { label: t('chatbot.q1'), answer: t('chatbot.a1') },
    { label: t('chatbot.q2'), answer: t('chatbot.a2') },
    { label: t('chatbot.q3'), answer: t('chatbot.a3') },
    { label: t('chatbot.q4'), answer: t('chatbot.a4') },
    { label: t('chatbot.q5'), answer: t('chatbot.a5') },
    { label: t('chatbot.q6'), answer: t('chatbot.a6') },
  ];

  // Initialize first message when component mounts or language changes
  useEffect(() => {
    setMessages([{ id: 0, text: t('chatbot.initial'), sender: 'bot' }]);
  }, [t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotResponse = (text: string) => {
    setIsTyping(true);
    const delay = Math.min(800 + text.length * 8, 2000);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text, sender: 'bot' },
      ]);
    }, delay);
  };

  const handleQuickQuestion = (q: QuickQuestion) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: q.label, sender: 'user' },
    ]);
    addBotResponse(q.answer);
  };

  return (
    <>
      <ChatToggle
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open AI assistant'}
        id="chatbot-toggle"
      >
        {isOpen ? <FaTimes /> : <FaBrain />}
      </ChatToggle>

      <ChatWindow isOpen={isOpen} role="dialog" aria-label="AI Assistant">
        <ChatHeader>
          <HeaderAvatar>
            <FaBrain />
          </HeaderAvatar>
          <HeaderInfo>
            <h4>{t('chatbot.title')}</h4>
            <span><OnlineDot />{t('chatbot.online')}</span>
          </HeaderInfo>
        </ChatHeader>

        <MessagesArea id="chatbot-messages">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} sender={msg.sender}>
              {msg.text}
            </MessageBubble>
          ))}
          {isTyping && (
            <TypingIndicator>
              <span />
              <span />
              <span />
            </TypingIndicator>
          )}
          <div ref={messagesEndRef} />
        </MessagesArea>

        <QuickQuestionsArea>
          {quickQuestions.map((q, i) => (
            <QuickButton
              key={i}
              onClick={() => handleQuickQuestion(q)}
              disabled={isTyping}
            >
              {q.label}
            </QuickButton>
          ))}
        </QuickQuestionsArea>
      </ChatWindow>
    </>
  );
};

export default Chatbot;
