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
     * text being inputed, to make it controlled
     */
    value?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional change handler, to make it controlled
     */
    handleChange?: (arg0: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
    size = 'large',
    placeholderText = 'Search for any IP address or domain',
    value,
    onClick, handleChange,
    ...props
}: SearchBarProps) => {
    const sizeStyle = size === 'large' ? styles.searchBarInputLarge : styles.searchBarInputSmall

    function buttonClick(action: (() => void) | undefined, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault()
        if (action) action()
        else console.log('clicked!')
        return;
    }

    return (
        <form className={styles.searchBarContainer}>
            <input
                id='searchBarInput'
                data-testid="inputText"
                type="text"
                className={`${styles.searchBarInput} ${sizeStyle}`}
                placeholder={placeholderText}
                // enable controlled field 
                value={value ?? (handleChange ? '' : undefined)}
                onChange={event => handleChange ? handleChange(event.target.value) : {}}
                {...props}
            />
            <button data-testid="button" aria-label="Search" id='confirmSearchButton' onClick={(event) => buttonClick(onClick, event)} className={styles.searchBarButton}>{">"}</button>

        </form>

    );
};
