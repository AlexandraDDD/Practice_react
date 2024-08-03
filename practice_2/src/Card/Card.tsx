import React, { ChangeEvent, FC, KeyboardEvent, useCallback } from 'react'
import styles from './Card.module.css'

interface Item {
    id: number;
    title: string;
    done: boolean;
}

interface CardProps {
    item: Item;
    updateItem: (id: number, title: string) => void;
    toggleDone: (id: number) => void;
    removeItem: (id: number) => void;
    index: number;
}

const Card: FC<CardProps> = ({ item, updateItem, toggleDone, removeItem,  index }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateItem(item.id, e.target.value);
    };

    const handleBlur = () => {
        if (!item.title) {
            removeItem(item.id);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            toggleDone(item.id);
        }
    };
    const handleRemoveKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            removeItem(item.id);
        }
    };

    const setFocus = useCallback((element: HTMLInputElement | null) =>
        {
            if (element) element.focus();
        }, []);

    return (
        <div
         className={styles.InputGroup}
         >
            <h5>{index}</h5>
            <input
                type="text"
                className={styles.Input}
                value={item.title}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                ref={setFocus}
            />
            <input
                className={styles.CardCheckbox}
                type="checkbox"
                checked={item.done}
                onChange={() => toggleDone(item.id)}
            />
            <div
                className={styles.Remove}
                onClick={() => removeItem(item.id)}
                tabIndex={0}
                onKeyDown={handleRemoveKeyDown}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#FFFFFF" />
                </svg>
            </div>

        </div>
    );
};

export default Card;
