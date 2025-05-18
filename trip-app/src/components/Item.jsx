export default function Item({ obj, onDeleteItem, onToggleItem }) {
  return (
    <div className="item-container">
      <input
        className="test"
        type="checkbox"
        value={obj.packed}
        onChange={() => onToggleItem(obj.id)}
      />
      <span className="element">{obj.quantity}</span>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.description}
      </span>
      <span onClick={() => onDeleteItem(obj.id)} className="btn-delete">
        ❌
      </span>
    </div>
  );
}