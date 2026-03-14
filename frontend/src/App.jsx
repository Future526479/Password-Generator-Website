import { useState } from 'react'
import "./App.css"

function App() {
  const [number, setNumber] = useState(5)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const sendNumber = async () => {
    setLoading(true);
    
    try{
      const response = await fetch("https://password-generator-4o9v.onrender.com/generate",{
        method:"POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ length: Number(number) })
      });

      const data = await response.json();
      setPassword(data.password);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className="container">
      <div className="card">
        <h1>Password Generator</h1>

        <div className="field">
          <label>Length</label>
          <select value={number} onChange={(e) => setNumber(e.target.value)}>
            {[5,6,7,8,9,10,11,12,13,14,15].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button 
          className="generateBtn" 
          onClick={sendNumber}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Generating...
            </>
          ) : (
            "Generate"
          )}
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
