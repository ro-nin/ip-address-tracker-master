import { LatLngTuple, LatLngExpression } from 'leaflet';


export type AddressDataType = {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
    latLon: LatLngExpression | LatLngTuple;
};
