import React, { useState } from 'react'
import geolocateAddress from '../sharedLogic/geolocate'
import AddressDetails, { AddressDataType } from './AddressDetails'
import MapView from './MapView'
import { SearchBar } from './SearchBar'
import styles from '../styles/Stories.module.css'

interface TrackerPageProps {
    /**
     * Address given by the server on first load
     */
    initialAddress: AddressDataType | null
}

/**
 * Page collecting all the elements for a geolocation
 */
const TrackerPage = ({ initialAddress }: TrackerPageProps) => {

    const triggerGeolocation = async () => {
        const result = await geolocateAddress(searchBarValue);
        if (result) {
            setAddress(result)
        }
    }
    const [address, setAddress] = useState(initialAddress);
    const [searchBarValue, setSearchBarValue] = useState<string | undefined>(undefined);

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', position: 'relative', width: '100vw', height: '100vh' }}>
                <div className={styles.topoBGContainer}>
                    <h1>IP Addres Tracker</h1>
                </div>
                <div className={styles.overlayContainer}>
                    <SearchBar value={searchBarValue} handleChange={setSearchBarValue} onClick={triggerGeolocation} />
                    <AddressDetails address={address} />
                </div>
                <MapView address={address} />
            </div>

        </>
    )
}

export default TrackerPage