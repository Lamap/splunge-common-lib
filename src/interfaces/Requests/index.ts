import { ISpgPoint } from '../Entities/ISpgPoint';
import { ISpgImage } from '../Entities';

export interface IPointCreateRequestBody {
    readonly imageId: string;
    readonly point: Omit<ISpgPoint, 'id' | 'images'>;
}
export interface IImageUpdateRequestBody extends ISpgImage {}
export interface IPointUpdateRequestBody extends ISpgPoint {}
