import { useState } from 'react'
import "./App.css"

function App() {
  const [number, setNumber] = useState(5)
  const [password, setPassword] = useState('')

  const sendNumber = async () => {
    const response = await fetch("https://password-generator-4o9v.onrender.com/generater",{
      method:"POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ length: Number(number) })
    });

    const data = await response.json();
    setPassword(data.password);
  }

  return (
    <>
    <div className="container">
      <div className="card">
        <h1>Password Generator</h1>

        <div className="field">
          <label>Length</label>
          <select value={number} onChange={(e) => setNumber(e.target.value)}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>

        <button className="generateBtn" onClick={sendNumber}>
          Generate
        </button>

        <div className="result">
          {password}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
