export interface NTypes {}
export type User = {
  id: number;
  username: string;
};

export type Message = {
  userId: number;
  username: string;
  text: string;
};
