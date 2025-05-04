import { useState } from "react";
import "./App.css";
import "./style.css";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 1,
    packed: false,
  },

  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
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

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return ; 
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);

    setDescription("")
    setQuantity("")
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

function PackingList() {
  return (
    <div className="list">
      {initialItems.map((item) => (
        <Item key={item.id} obj={item} />
      ))}
    </div>
  );
}

function Item({ obj }) {
  return (
    <div>
      <span className="element">{obj.quantity}</span>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.description}
      </span>
      <span className="btn-delete">❌</span>
    </div>
  );
}

function Stats() {
  return (
    <footer>
      <strong>
        🎒 You have X items on your list , and you already packed X (%X)
      </strong>
    </footer>
  );
}

export default App;
