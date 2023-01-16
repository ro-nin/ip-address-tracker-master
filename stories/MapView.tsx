import React, { useEffect, useRef, useState } from "react";
import { AddressDataType } from './AddressDetails'
import styles from '../styles/Stories.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'
import { GeoLocErrorType } from "../sharedLogic/geolocate";
interface MapProps {
    /**
     * Addres information to populate the map
     */
    address?: AddressDataType;
    error?: GeoLocErrorType;
}

const MapView = ({ address, error }: MapProps) => {
    const isLoading = (address === undefined) && !error;

    return (
        <div className={`${styles.mapViewContainer} ${isLoading ? 'skeleton' : ''}`}>
            {!address?.ipAddress ?? 'no address'}
            {/* if key is not provided, the map won't update */}
            {!isLoading && <MapContainer key={JSON.stringify(address)} style={{ height: '100%', zIndex: '1', width: '100%' }}
                center={address?.latLon ?? [0, 0]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {!error && address && <Marker position={address?.latLon ?? [0, 0]}>
                    {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                </Marker>}
            </MapContainer>}
        </div>
    )
}

export default MapView