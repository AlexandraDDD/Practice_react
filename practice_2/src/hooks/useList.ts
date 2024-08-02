import { useState,  } from 'react';

interface Item {
  id: number;
  title: string;
  done: boolean;
}

const useList = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    const newItem: Item = { id: Date.now(), title: '', done: false };
    setItems([...items, newItem]);
  };

  const updateItem = (id: number, title: string) => {
    setItems(items.map(item =>  (item.id === id ? {...item, title}: item)))
  };

  const toggleDone = (id: number) => {
    setItems(items.map(item => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return {
    items,
    addItem,
    updateItem,
    toggleDone,
    removeItem,
  };
};

export default useList;
