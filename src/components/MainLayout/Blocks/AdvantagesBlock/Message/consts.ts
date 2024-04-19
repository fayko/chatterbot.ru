import { MESSAGE_CLASSES } from './styles';

export const TITLES: Record<keyof typeof MESSAGE_CLASSES, string> = {
  uniqueEnv: 'Уникальную языковую среду',
  fastProgress: 'Быстрый прогресс в свободной речи',
  oneYear: '52 собеседника за 1 год практики'
};

export const MESSAGE: Record<keyof typeof MESSAGE_CLASSES, string> = {
  uniqueEnv:
    'Chatter-bot дает возможность общаться с разными собеседниками, распознавать и понимать все структуры языка, говорить новыми фразами и понимать сленг',
  fastProgress:
    'Используя Chatter-bot, ты будешь постоянно практиковать свои навыки в разговорной речи, тем самым повысишь свою уверенность и преобразуешь текущий навык на следующий уровень!',
  oneYear:
    'Каждую неделю ты будешь разговаривать c новым собеседником. Это более пятидесяти уникальных коммуникаторов для общения.'
};
