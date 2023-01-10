import { ISpgImage, ISpgPoint } from '../Entities';

export interface IPointCreateResponse extends Array<ISpgPoint> {}
export interface IPointFetchResponse extends Array<ISpgPoint> {}
export interface IImageFetchResponse extends Array<ISpgImage> {}
