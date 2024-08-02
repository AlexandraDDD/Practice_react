import { FC } from 'react';
import useList from './hooks/useList';
import CardList from './CardList/CardList';
import './App.css'

const App: FC = () => {
  const { items, addItem, updateItem, toggleDone, removeItem } = useList();

  return (
    <div className='App'>
      <div className="container">
        <h3>Список покупок</h3>
        <button onClick={addItem}>Новый элемент</button>
        <CardList
          items={items}
          updateItem={updateItem}
          toggleDone={toggleDone}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
};

export default App;