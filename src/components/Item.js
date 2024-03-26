export default function Item({ item, onDeleteItem, onToggleCheckbox }) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleCheckbox(id)}
      ></input>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
