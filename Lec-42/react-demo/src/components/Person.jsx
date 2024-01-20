import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Profession: {props.profession}</p>
      <p>Stocks: {Math.random()}</p>
    </div>
  )
}

export default Person