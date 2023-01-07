import { IDateInformationExact, IDateInformationRange } from '../DateInformation';
import { ISpgTag } from '../ISpgTag';

export interface ISpgImage {
    readonly date?: IDateInformationExact | IDateInformationRange;
    readonly description?: string;
    readonly id: string;
    readonly title?: string;
    readonly tags?: ISpgTag[];
    readonly url: string;
}
