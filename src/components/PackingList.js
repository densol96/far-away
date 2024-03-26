import { useState } from 'react';
import Item from './Item.js';

export default function PackingList({
  items,
  onDeleteItem,
  onToggleCheckbox,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items.toSorted((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else {
    sortedItems = items.toSorted((a, b) => +b.packed - +a.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleCheckbox={onToggleCheckbox}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
