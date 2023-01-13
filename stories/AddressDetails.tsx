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
     * Data to show
     */
    address: AddressDataType | undefined | null;


}
const AddressDetails = ({ address: addressData }: AddressDetailsProps) => {
    return (
        <div className={styles.addressContainer}>
            <div className={styles.addressSection}>
                <p className={styles.addressLabel}>
                    IP ADRRESS
                </p>
                <p className={styles.addressValue}>
                    {addressData === null ? '/' : addressData === undefined ? 'searching' : addressData.ipAddress}</p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <p className={styles.addressLabel}>
                    LOCATION
                </p>
                <p className={styles.addressValue}>
                    {addressData?.location}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <p className={styles.addressLabel}>
                    TIMEZONE
                </p>
                <p className={styles.addressValue}>
                    {addressData?.timezone}
                </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.addressSection}>
                <p className={styles.addressLabel}>
                    ISP
                </p>
                <p className={styles.addressValue}>
                    {addressData?.isp}
                </p>
            </div>
        </div>
    )
}

export default AddressDetails