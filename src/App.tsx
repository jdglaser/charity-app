import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { create } from './api'

async function handleClick(name: string) {
  await create({name});
}

function App() {
  const [name, setName] = useState<string>("");

  return (
    <div className="App">
      <label>Name: </label>
      <input type="text" value={name} onChange={(evt) => setName(evt.target.value)}></input>
      <button onClick={() => handleClick(name)}>Submit</button>
    </div>
  )
}

export default App
