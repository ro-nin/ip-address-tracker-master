import { LatLngTuple, LatLngExpression } from 'leaflet';
import React from 'react'
import { GeoLocErrorType, GeoLocResultType } from '../sharedLogic/geolocate';
import styles from '../styles/Stories.module.css'

export type AddressDataType = {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
    latLon: LatLngExpression | LatLngTuple
};
interface AddressDetailsProps {

    /**
     * Address data to show
     */
    address?: AddressDataType;
    error?: GeoLocErrorType;

}
/**
 * A container for the address various parts
 */
const AddressDetails = ({ address, error }: AddressDetailsProps) => {
    const isLoading = (address === undefined) && !error;

    type Section = {
        label: string | undefined,
        value: string | undefined,
    }
    //TODO lift up for more reusable component
    const sections: Array<Section> = [
        { label: 'IP ADDRESS', value: address?.ipAddress },
        { label: "LOCATION", value: address?.location },
        { label: "TIMEZONE", value: address && `UTC ${address?.timezone}` },
        { label: "ISP", value: address?.isp },
    ]

    const len = sections.length
    return (

        <div className={styles.addressContainer}>
            {sections.map((section, index) => {
                return <>
                    <div key={`section-${address?.ipAddress}`} className={styles.addressSection}>
                        <label className={styles.addressLabel}>
                            {section.label}
                        </label>
                        {!isLoading && <p className={styles.addressValue}>
                            {section.value}
                        </p>}
                        {isLoading && <div className={"skeleton skeleton-text addressValue"} />}
                    </div>
                    {index < len - 1 && <div key={'separator' + index} className={styles.separator}></div>}

                </>
            }
            )}


        </div>
    )
}

export default AddressDetails