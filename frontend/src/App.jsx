import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import index from './templates/index';
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider>
      <Routes>
        <Route path='/' element={<index/>}/>
      </Routes>
    </Provider>
    </>
  )
}

export default App
