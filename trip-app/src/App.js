import "./App.css";
import "./style.css"

function App() {
  return <div>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
}

function Logo() {
 return <header>
  <h1> 🌴 Far Away 🎒</h1>
 </header>
}

function Form() {
  return (
    <div className="form-container">
    <h3>What do you need for your 😊 trip ?</h3>
  <select>
    <option>1</option>
     <option>2</option>
     <option>3</option>
  </select>
  <input type="text"/>
  <button>submit</button>
  </div>
  )

}

function PackingList() {
  return (
    <div className="list">
  LIST
    </div>
  )

}

function Stats() {
  return (
    <footer>
      <strong>🎒 You have X items on your list , and you already packed X (%X)</strong>
    </footer>
  )
}

export default App;
