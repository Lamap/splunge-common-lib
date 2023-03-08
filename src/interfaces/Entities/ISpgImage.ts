import { ISpgTag } from '../ISpgTag';
import { IDateInformation } from '../DateInformation';

export interface ISpgImage {
    readonly date?: IDateInformation;
    readonly description?: string;
    readonly id: string;
    readonly title?: string;
    readonly tags?: ISpgTag[];
    readonly url: string;
    readonly widthPerHeightRatio: number;
}
