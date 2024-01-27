import React, { useEffect, useState } from 'react'

const AllRecipie = () => {
  const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    console.log(recipes);

  return (
    <div>
      {recipes.map(item => <p>{item.category}</p>)}
    </div>
  )
}

export default AllRecipie