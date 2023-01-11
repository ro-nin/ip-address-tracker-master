import React from 'react'
import { AddressData } from './AddressDetails'
import styles from '../styles/Stories.module.css'

interface MapProps {
    address: AddressData | undefined | null
}

const MapView = ({ address }: MapProps) => {
    return (
        <div className={styles.mapViewContainer}>{address?.ipAddress ?? 'no address'}</div>
    )
}

export default MapView