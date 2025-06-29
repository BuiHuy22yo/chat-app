export interface ChatItem {
  id: string;
  name: string;
  initials?: string;
  color?: string;
  lastMessage?: string;
  lastDate: string;
  status?: 'online' | 'offline' | '';
  unread?: number;
  isYou?: boolean;
}

export const chatList: ChatItem[] = [
  {
    id: '1',
    name: 'Frontend Team',
    initials: 'FT',
    color: 'bg-blue-300',
    lastMessage: 'Let`s review the new UI!',
    lastDate: 'Today',
    status: 'online',
    unread: 3,
  },
  {
    id: '2',
    name: 'Marketing',
    initials: 'MK',
    color: 'bg-pink-400',
    lastMessage: 'Campaign launch at 2PM.',
    lastDate: 'Yesterday',
    status: '',
    unread: 0,
  },
  {
    id: '3',
    name: 'Support Bot',
    initials: 'SB',
    color: 'bg-green-300',
    lastMessage: 'Your ticket has been resolved.',
    lastDate: 'Mon',
    status: '',
    unread: 1,
  },
  {
    id: '4',
    name: 'Anna Nguyen',
    initials: 'AN',
    color: 'bg-purple-400',
    lastMessage: 'Thanks for your help!',
    lastDate: 'Sun',
    status: 'offline',
    unread: 0,
  },
  {
    id: '5',
    name: 'Random Chat',
    initials: 'RC',
    color: 'bg-yellow-300',
    lastMessage: 'Who wants coffee?',
    lastDate: 'Sat',
    status: '',
    unread: 0,
  },
]; 