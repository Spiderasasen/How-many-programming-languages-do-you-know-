import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/game"} element={<Game />} />
        </Routes>
    </Router>
  )
}

export default App
