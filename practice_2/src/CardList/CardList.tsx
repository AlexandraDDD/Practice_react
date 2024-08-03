import { FC, RefObject} from 'react'
import Card from '../Card/Card';

interface Item {
    id: number;
    title: string;
    done: boolean;
}

interface CardListProps {
    items: Item[];
    updateItem: (id: number, title: string) => void;
    toggleDone: (id: number) => void;
    removeItem: (id: number) => void;
}

const CardList: FC<CardListProps> = ({ items, updateItem, toggleDone, removeItem }) => {
    return (
        <div>
            {items.map((item, index) => 
            (
                <Card
                    key={item.id}
                    item={item}
                    updateItem={updateItem}
                    toggleDone={toggleDone}
                    removeItem={removeItem}
                    index={index+1} 
                />
            ))}
        </div>
    );
};

export default CardList;
