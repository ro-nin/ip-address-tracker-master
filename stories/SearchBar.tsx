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
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
    size = 'large',
    placeholderText = 'Search something...',
    value,
    onClick,
    ...props
}: SearchBarProps) => {
    const sizeStyle = size === 'large' ? styles.searchBarInputLarge : styles.searchBarInputSmall
    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                className={`${styles.searchBarInput} ${sizeStyle}`}
                placeholder={placeholderText}
                {...props}
                value={value}

            />
            <button className={styles.searchBarButton}>`{'>'}`</button>

        </div>

    );
};
