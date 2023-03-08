import { DateFormat } from '../enums';

export interface IDateInformation {
    readonly type: DateFormat;
    readonly start: number;
    readonly end?: number;
}
