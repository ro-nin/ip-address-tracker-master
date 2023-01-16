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

    return (
        <div className={styles.addressContainer}>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    IP ADRRESS
                </label>
                {!isLoading && <p className={styles.addressValue}>
                    {address?.ipAddress}
                </p>}
                {isLoading && <div className={"skeleton skeleton-text addressValue"} />}
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    LOCATION
                </label>
                {!isLoading && <p className={styles.addressValue}>
                    {address?.location}
                </p>}
                {isLoading && <div className={"skeleton skeleton-text addressValue"} />}

            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    TIMEZONE
                </label>
                {!isLoading && <p className={styles.addressValue}>
                    {address && `UTC ${address?.timezone}`}
                </p>}
                {isLoading && <div className={"skeleton skeleton-text addressValue"} />}

            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    ISP
                </label>
                {!isLoading && <p data-testid="ISPValue" className={styles.addressValue}>
                    {address?.isp}
                </p>}
                {isLoading && <div className={"skeleton skeleton-text addressValue"} />}

            </div>
        </div>
    )
}

export default AddressDetails