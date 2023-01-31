import { IUser } from './IUser';

export interface IUserBase extends Pick<IUser, 'email' | 'role' | 'metadata'> {}
