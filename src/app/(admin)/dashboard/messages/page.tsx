import { Messages } from '@/components/dashboard';
import { generateRandomMessages } from '@/lib/helperFunctions';
import { Message, User } from '@/types/global.types';

const MessagePage = () => {
  const users: User[] = [
    { id: 1, username: 'User1' },
    { id: 2, username: 'User2' },
    { id: 3, username: 'User3' },
  ];

  const messages: Message[] = generateRandomMessages(100, users);
  if (messages.length === 0) {
    return <h1>loading..........</h1>;
  }
  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
};

export default MessagePage;
