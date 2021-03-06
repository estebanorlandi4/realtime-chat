// User
export interface IUser {
  _id?: string;
  username: string;
  avatar: string;
  password?: string;
}
export interface IUserLogin {
  username: string;
  password: string;
}
export interface IUserRegister {
  username: string;
  password: string;
  avatar?: string;
}
export interface IUserReducer {
  type: unknown;
  payload: IUser;
}

// Message
export interface IMessage {
  _id?: number;
  content: string;
  from: IUser;
  _createdAt: Date;
}
export interface IMessageReducer {
  type: unknown;
  payload: IMessage[];
}

// Chats
export interface IChat {
  _id: string;
  userA: IUser;
  userB: IUser;

  messages: IMessage[];
}
