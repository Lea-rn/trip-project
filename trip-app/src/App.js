import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [items, setItems] = useState([]);




  function handleAddItems(obj) {
    setItems((cur) => [...cur, obj]);

  }

  function handleDeleteitems(id) {
    setItems(() => items.filter((ele) => ele.id !== id));
  }

  function handleToggleItem(id) {
    setItems(() =>
      items.map((item ) =>
        item.id === id ? { ...item, packed: !item.packed  } : item
      )
    );
  }


  //// spread operator ... 

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteitems}
        onToggleItem={handleToggleItem}
      />
      <Stats  items={items} />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <h1> 🌴 Far Away 🎒</h1>
    </header>
  );
}

//// function essem ()  {     } /// declaration

///// const essem = function (){} /// expression
//// const essem = ()=> {}  /// arrow function

// function hello (){
//   console.log("hello")
// }

// const hello = function (){
//   console.log("hello")
// }

// const hello = ()=> console.log("hello")

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="form-container">
      <h3>What do you need for your 😊 trip ?</h3>
      <form className="form-element" onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        {/* 
        <input  placeholder="quantity ..." type="number" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}/> */}
        <input
          placeholder="item..."
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      {items.map((item) => (
        <Item
          key={item.id}
          obj={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
}

function Item({ obj, onDeleteItem, onToggleItem }) {
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

function Stats({items}) {
    const numItems = items.length
    const numPacked = items.filter((item)=> item.packed === true).length
    const percentage = Math.round((numPacked/numItems) * 100 )
  return (
    <footer>
      <strong>
        {percentage === 100 ? "you got everything !!  ready to go 🛬" : `
          🎒 You have ${numItems} items on your list , and you already packed ${numPacked} (${percentage}%)
        `}
      
      </strong>
    </footer>
  );
}

export default App;
