import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import TodoApp from './components/TodoApp'
// import './App.css'
import AllRecipie from './components/useEffect/AllRecipie'

const App = () => {

  return (
    <>
      <Link to="/todoApp">Todo App</Link> <br />
      <Link to="/AllRecipe">All Recipes</Link>

      <Routes>
        <Route path='/todoApp' element={<TodoApp/>}></Route>
        <Route path='/AllRecipe' element={<AllRecipie/>}></Route>
      </Routes>
    </>

    // <div>
    //   <TodoApp/>
    //   <AllRecipie/>
    // </div>
    
  )
}

export default App