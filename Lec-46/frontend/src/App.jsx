import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import Show from './components/pages/Show'
import NewQuote from './components/pages/NewQuote'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
        <Route path='/quotes/new' element={<NewQuote/>}></Route>
        <Route path='/quotes/:id' element={<Show/>}></Route>
      </Routes>
    </div>
  )
}

export default App