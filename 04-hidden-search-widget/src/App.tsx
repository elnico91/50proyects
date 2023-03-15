import { useState } from 'react'
import './App.css'

function App() {
  const [ isHidden, setIsHidden ] = useState<boolean>(false)

  const toggleHidden = ():void => setIsHidden(!isHidden)

  return (
    <div className={isHidden? 'search active' : 'search'}>
        <input className='input' type='text' placeholder='Search...'/>
        <button className='btn' onClick={toggleHidden}>
          <img src='../src/assets/search.svg'/>
        </button>
    </div>
  )
}

export default App
