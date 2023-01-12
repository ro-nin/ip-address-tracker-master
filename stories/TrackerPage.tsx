import React, { useState } from 'react'
import geolocateAddress from '../sharedLogic/geolocate'
import AddressDetails, { AddressDataType } from './AddressDetails'
import MapView from './MapView'
import { SearchBar } from './SearchBar'

interface TrackerPageProps {
    initialAddress: AddressDataType | null
}

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
            <SearchBar value={searchBarValue} handleChange={setSearchBarValue} onClick={triggerGeolocation} />
            <AddressDetails address={address} />
            <MapView address={address} />
        </>
    )
}

export default TrackerPage