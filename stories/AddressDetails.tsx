import { LatLngTuple, LatLngExpression } from 'leaflet';
import React from 'react'
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
    address: AddressDataType | undefined | null;


}
/**
 * A container for the address various parts
 */
const AddressDetails = ({ address: addressData }: AddressDetailsProps) => {
    return (
        <div className={styles.addressContainer}>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    IP ADRRESS
                </label>
                <p className={styles.addressValue}>
                    {addressData === null ? '/' : addressData === undefined ? 'searching' : addressData.ipAddress}</p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    LOCATION
                </label>
                <p className={styles.addressValue}>
                    {addressData?.location}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    TIMEZONE
                </label>
                <p className={styles.addressValue}>
                    {addressData?.timezone}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <label className={styles.addressLabel}>
                    ISP
                </label>
                <p className={styles.addressValue}>
                    {addressData?.isp}
                </p>
            </div>
        </div>
    )
}

export default AddressDetails