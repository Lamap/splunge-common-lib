import { ISpgPoint } from '../Entities/ISpgPoint';

export interface IPointCreateRequestBody {
    readonly imageId: string;
    readonly point: Omit<ISpgPoint, 'id' | 'images'>;
}
