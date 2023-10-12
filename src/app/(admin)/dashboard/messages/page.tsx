import { Messages } from '@/components/dashboard';
import { messages } from '@/lib/data';

const MessagePage = () => {
  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
};

export default MessagePage;
