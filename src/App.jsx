import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Addpeople } from './components/Addpeople'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <h2 className='app-title'>Expense Splitter</h2>
          <div className="card-section">

        <Addpeople />
        </div>
      </div>
      
    </>
  )
}

export default App
