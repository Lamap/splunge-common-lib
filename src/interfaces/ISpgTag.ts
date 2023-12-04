import { IMetadata } from './IMetadata';

export interface ISpgTag {
    readonly id: string;
    readonly value: string;
    readonly metaData?: IMetadata;
}
