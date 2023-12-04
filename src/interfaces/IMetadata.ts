import { IUser } from './IUser';

export interface IMetadata {
    createdBy: IUser;
    createdOn: Date;
    lastUpdatedBy: IUser;
    lastUpdatedOn: Date;
}
