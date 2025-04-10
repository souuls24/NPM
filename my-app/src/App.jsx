import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [countThree, setCountThree] = useState(0)

  const incrementByOne = () => setCountOne((count) => count + 1)
  const incrementByTwo = () => setCountTwo((count) => count + 1)
  const incrementByThree = () => setCountThree((count) => count + 1)

  const getLeadingVote = () => {
    if (countOne > countTwo && countOne > countThree) return "Lion is leading!"
    if (countTwo > countOne && countTwo > countThree) return "Bat is leading!"
    if (countThree > countOne && countThree > countTwo) return "Tiger is leading!"
    return "It's a tie!"
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementByOne}>
          Lion ({countOne})
        </button>

        <button onClick={incrementByTwo}>
          Bat ({countTwo})
        </button>

        <button onClick={incrementByThree}>
          Tiger ({countThree})
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h2>{getLeadingVote()}</h2>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App