import { UserRole } from '../enums';
import { IUserMetadata } from './IUserMetadata';

export interface IUser {
    readonly _id: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRole;
    readonly metadata: IUserMetadata;
}
