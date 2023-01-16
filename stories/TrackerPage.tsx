import React, { useState } from 'react'
import geolocateAddress, { GeoLocErrorType, GeoLocResultType } from '../sharedLogic/geolocate'
import AddressDetails, { AddressDataType } from './AddressDetails'
import MapView from './MapView'
import { SearchBar } from './SearchBar'
import styles from '../styles/Stories.module.css'

interface TrackerPageProps {
    /**
     * Address given by the server on first load
     */
    initialAddress: GeoLocResultType
}



/**
 * Page collecting all the elements for a geolocation
 */
const TrackerPage = ({ initialAddress }: TrackerPageProps) => {
    const [error, setError] = useState<GeoLocErrorType | undefined>(initialAddress.error);
    const [address, setAddress] = useState<AddressDataType | undefined>(initialAddress.address);
    const [searchBarValue, setSearchBarValue] = useState<string | undefined>(undefined);


    const triggerGeolocation = async () => {

        const { address: addressFromServer, error: errorFromServer } = await geolocateAddress(searchBarValue);
        if (addressFromServer && !errorFromServer) {
            setAddress(addressFromServer)
        }
        setError(errorFromServer)

    }
    return (
        <>
            <div className={styles.trackerPageContainer}>
                <div className={styles.topoBGContainer} />
                <div className={styles.overlayContainer}>
                    <h1>IP Addres Tracker</h1>
                    <SearchBar value={searchBarValue} handleChange={setSearchBarValue} onClick={triggerGeolocation} />
                    <div className={styles.errorPadding}>
                        {error && <div className={styles.errorContainer}>
                            <p>{error?.code ?? ''}</p>
                            <p>{': '}</p>
                            <p>{error?.message ?? ''}</p>
                        </div>
                        }
                    </div>
                    <AddressDetails address={address} error={error} />
                </div>
                <MapView address={address} />
            </div>

        </>
    )
}

export default TrackerPage