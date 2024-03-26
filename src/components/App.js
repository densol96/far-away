import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteAddItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleCheckBox(id) {
    setItems((items) =>
      // eslint-disable-next-line no-confusing-arrow
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    if (items.length === 0) return alert('Currently no any items in the list!');
    const choice = window.confirm('Are you sure you want to delete this?');
    choice && setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteAddItems}
        onToggleCheckbox={toggleCheckBox}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
