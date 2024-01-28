import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
      </Routes>
    </div>
  )
}

export default App