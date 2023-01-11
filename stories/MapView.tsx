import React, { useRef, useState } from "react";
import { AddressData } from './AddressDetails'
import styles from '../styles/Stories.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
interface MapProps {
    address: AddressData | undefined | null
}

const MapView = ({ address }: MapProps) => {
    return (
        <div className={styles.mapViewContainer}>
            {!address?.ipAddress ?? 'no address'}
            <MapContainer  style={{ height: '100%', width:'100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapView