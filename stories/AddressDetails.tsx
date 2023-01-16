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

    return (
        <div className={styles.addressContainer}>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    IP ADRRESS
                </label>
                <p className={styles.addressValue}>
                    {address?.ipAddress}</p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    LOCATION
                </label>
                <p className={styles.addressValue}>
                    {address?.location}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    TIMEZONE
                </label>
                <p className={styles.addressValue}>
                    {address?.timezone}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    ISP
                </label>
                <p data-testid="ISPValue" className={styles.addressValue}>
                    {address?.isp}
                </p>
            </div>
        </div>
    )
}

export default AddressDetails