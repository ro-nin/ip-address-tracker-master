import React from 'react'
import { GeoLocErrorType, GeoLocResultType } from '../sharedLogic/geolocate';
import styles from '../styles/Stories.module.css'

interface DataDisplayerProps {

    /**
     * Data to show
     * if undefined -> loading
     * if null -> error
     */
    data: DataSectionType[] | undefined | null
    /**
    * How many skeleton placeholder for loading/error state to show
    */
    empties?: number
}

export type DataSectionType = {
    label: string | undefined,
    value: string | undefined,
}

/**
 * A container that displays data in (label,value) format in a grid like way
 */
const DataDisplayer = ({ data, empties = 4 }: DataDisplayerProps) => {
    const isLoading = (data === undefined) && data !== null;
    const len = data?.length
    return (

        <div className={styles.dataDisplayerContainer}>
            {data && data.map((section, index) => {
                return <div className={styles.dataDisplayerBlock} key={`section-${section.label}`}>
                    <div className={styles.addressSection}>
                        <label id={`${section.label}`} className={styles.addressLabel}>
                            {section.label}
                        </label>
                        <p data-testid={`${section.label}`} className={styles.addressValue}>
                            {section.value}
                        </p>
                    </div>
                    {/* {index < len! - 1 && <div key={'separator' + index} className={styles.separator}></div>} */}

                </div>
            }
            )}
            {!data && isLoading && [...Array(empties)].map((empty, index) => {
                return <div className={styles.dataDisplayerBlock} key={`section-empty`}>
                    <div className={styles.addressSection}>
                        {<div className={"skeleton skeleton-text addressLabel skeleton-text-small "} />}
                        {<div className={"skeleton skeleton-text addressValue"} />}
                    </div>
                </div>
            }
            )}
            {data === null && [...Array(empties)].map((empty, index) => {
                return <div className={styles.dataDisplayerBlock} key={`section-error`}>
                    <div className={styles.addressSection}>
                        {<div className={" errorBg skeleton-text addressLabel skeleton-text-small "} />}
                        {<div className={" errorBg skeleton-text addressValue"} />}
                    </div>
                </div>
            }
            )}


        </div>
    )
}

export default DataDisplayer