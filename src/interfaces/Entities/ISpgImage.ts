import { ISpgTag } from '../ISpgTag';
import { IDateInformation } from '../DateInformation';
import { IMetadata } from '../IMetadata';

export interface ISpgImage {
    readonly date?: IDateInformation;
    readonly description?: string;
    readonly id: string;
    readonly metaData?: IMetadata;
    readonly title?: string;
    readonly tags?: ISpgTag[];
    readonly url: string;
    readonly widthPerHeightRatio: number;
}
