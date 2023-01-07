import { LatLngLiteral } from 'leaflet';

export interface ISpgPoint {
    readonly position: LatLngLiteral;
    readonly hasDirection?: boolean;
    readonly direction?: number;
    readonly images: string[];
    readonly id: string;
}
