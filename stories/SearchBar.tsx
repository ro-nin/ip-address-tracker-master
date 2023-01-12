import React from 'react';
import styles from '../styles/Stories.module.css'

interface SearchBarProps {


    /**
     * How large the search bar should be?
     */
    size?: 'small' | 'large';
    /**
     * placeolder value when no text is being inputed
     */
    placeholderText?: string;
    /**
     * text being inputed
     */
    value?: string;
    /**
     * Optional click handler, to make it controller
     */
    onClick?: () => void;
    /**
     * Optional change handler, to make it controller
     */
    handleChange?: (arg0: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
    size = 'large',
    placeholderText = 'Search fro any IP address or domain',
    value,
    onClick, handleChange,
    ...props
}: SearchBarProps) => {
    const sizeStyle = size === 'large' ? styles.searchBarInputLarge : styles.searchBarInputSmall
    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                className={`${styles.searchBarInput} ${sizeStyle}`}
                placeholder={placeholderText}
                value={value}
                onChange={event => handleChange ? handleChange(event.target.value) : {}}
                {...props}
            />
            <button onClick={() => onClick ? onClick() : {}} className={styles.searchBarButton}>{">"}</button>

        </div>

    );
};
