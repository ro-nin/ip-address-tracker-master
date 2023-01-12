import React from 'react'
import AddressDetails, { AddressDataType } from './AddressDetails'
import MapView from './MapView'
import { SearchBar } from './SearchBar'

interface TrackerPageProps {
    address: AddressDataType | null
}

const TrackerPage = ({ address }: TrackerPageProps) => {
    return (
        <>
            <SearchBar />
            <AddressDetails address={address} />
            <MapView address={address} />
        </>
    )
}

export default TrackerPage