import { useState } from 'react'
import blueLogo from './assets/logo-blue.svg';
import yellowLogo from './assets/logo-yellow.svg';
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`app-container ${dark ? 'dark-mode' : 'light-mode'}`}>
      <div className="row">
        <div className="left" onClick={() => setDark(!dark)}>
          <img src={dark ? blueLogo : yellowLogo} className='logo'></img>
        </div>
      </div>
    </div>
  )
}

export default App
