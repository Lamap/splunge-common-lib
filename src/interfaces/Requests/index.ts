import { ISpgPoint } from '../Entities/ISpgPoint';
import { ISpgImage } from '../Entities';
import { ISpgLatLngBounds } from '../ISpgLatLngBounds';
import { IUser } from '../IUser';
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
export interface ICreateUserRequestBody extends Pick<IUser, 'email' | 'password'> {}
export interface ILoginUserRequestBody extends Pick<IUser, 'email' | 'password'> {}
