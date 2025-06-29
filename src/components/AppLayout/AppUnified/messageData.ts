export interface MessageItem {
  id: string;
  sender: string;
  initials?: string;
  content: string;
  time: string;
  isYou?: boolean;
}

export const messageList: MessageItem[] = [
  {
    id: 'm1',
    sender: 'Anna Nguyen',
    initials: 'AN',
    content: 'Hi team! The new landing page is live 🚀',
    time: '09:01 AM',
  },
  {
    id: 'm2',
    sender: 'Frontend Team',
    initials: 'FT',
    content: 'Awesome! I will check it out now.',
    time: '09:02 AM',
  },
  {
    id: 'm3',
    sender: 'You',
    initials: 'YO',
    content: 'Great job, everyone! 🎉',
    time: '09:03 AM',
    isYou: true,
  },
  {
    id: 'm4',
    sender: 'Support Bot',
    initials: 'SB',
    content: 'Reminder: Standup meeting at 10AM.',
    time: '09:05 AM',
  },
  {
    id: 'm5',
    sender: 'Marketing',
    initials: 'MK',
    content: 'Don\'t forget to update the campaign assets.',
    time: '09:10 AM',
  }
]; 