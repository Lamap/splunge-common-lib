import { ISpgImage, ISpgPoint } from '../Entities';
import { IUserBase } from '../IUserBase';

export interface IPointCreateResponse extends Array<ISpgPoint> {}
export interface IPointFetchResponse extends Array<ISpgPoint> {}
export interface IPointsByBoundsResponse extends Array<ISpgPoint> {}
export interface IImageFetchResponse extends Array<ISpgImage> {}
export interface IImageDeleteResponse {
    readonly deletedImageId: string;
    readonly updatedPoints: ISpgPoint[];
}
export interface IPointDeleteResponse {
    readonly deletedPointId: string;
}
export interface IImageUpdateResponse extends ISpgImage {}
export interface IImageCreateResponse extends ISpgImage {}
export interface IPointUpdateResponse extends ISpgPoint {}
export interface IPointDetachResponse extends ISpgPoint {}
export type PointOfImageResponse = ISpgPoint | null;
export interface IPointAttachResponse extends Array<ISpgPoint> {}
export interface IUserLoginResponse extends IUserBase {}
