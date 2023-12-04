import { LatLngLiteral } from 'leaflet';
import { IMetadata } from '../IMetadata';

export interface ISpgPoint {
    readonly position: LatLngLiteral;
    readonly hasDirection?: boolean;
    readonly direction?: number;
    readonly images: string[];
    readonly id: string;
    readonly metaData?: IMetadata;
}
