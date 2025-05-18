import {useState} from "react"
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem , handleClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems ;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed))
  }

  return (
    <div className="app">
      <div className="list">
        {sortedItems.map((item) => (
          <div className="container"key={item.id}>
            <Item
            
              obj={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          </div>
        ))}
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        <button onClick={handleClearList}>clear list</button>
      </div>
    </div>
  );
}