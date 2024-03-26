export default function Stats({ items }) {
  const itemsTotal = items.length;

  if (!itemsTotal)
    return (
      <footer className="stats">
        <em>{`Start adding your items to the list! 🛍️`}</em>
      </footer>
    );

  const packedTotal = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedTotal / itemsTotal) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go! ✈️`
          : `You have ${itemsTotal} items on your list, and you already packed
        ${packedTotal} (
        ${itemsTotal !== 0 ? `${percentage}`.slice(0, 4) : ''}
        %)`}
      </em>
      🛍️
    </footer>
  );
}
