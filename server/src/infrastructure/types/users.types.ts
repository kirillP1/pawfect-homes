export interface IUser  {
  username: string;
  email: string;
  password: string;
  isActivated: boolean;
  activationLink?: string;
  createdAt: Date;
  updatedAt: Date;
}