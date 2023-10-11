import { Message, User } from '@/types/global.types';

export const generateRandomMessages = (
  count: number,
  users: User[]
): Message[] => {
  const messages: Message[] = [];

  for (let i = 0; i < count; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const message: Message = {
      userId: randomUser.id,
      username: randomUser.username,
      text: `Message ${i + 1}`,
    };
    messages.push(message);
  }

  return messages;
};
