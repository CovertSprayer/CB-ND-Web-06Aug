import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import Show from './components/pages/Show'
import NewQuote from './components/pages/NewQuote'
import EditQuote from './components/pages/EditQuote'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
        <Route path='/quotes/new' element={<NewQuote/>}></Route>
        <Route path='/quotes/:id' element={<Show/>}></Route>
        <Route path='/quotes/:id/edit' element={<EditQuote/>}></Route>
      </Routes>
    </div>
  )
}

export default App