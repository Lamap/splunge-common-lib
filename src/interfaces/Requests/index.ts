import { ISpgPoint } from '../Entities/ISpgPoint';
import { ISpgImage } from '../Entities';
import { ISpgLatLngBounds } from '../ISpgLatLngBounds';
export interface IPointCreateRequestBody {
    readonly imageId: string;
    readonly point: Omit<ISpgPoint, 'id' | 'images'>;
}
export interface IImageUpdateRequestBody extends ISpgImage {}
export interface IPointUpdateRequestBody extends ISpgPoint {}
export interface ICreateImageRequestBody {
    readonly widthPerHeightRatio: number;
}
export interface IGetPointsByBoundsRequestBody extends ISpgLatLngBounds {}
