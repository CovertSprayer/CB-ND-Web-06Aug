import React from 'react'
import Counter from './components/Counter';

const App = () => {
  let div;

  if(!true){
    div = <div>Hii</div>
  }
  else{
    div = <div>Hello</div>
  }

  let a = 20;
  let imgUrl = 'https://images.unsplash.com/photo-1682687982423-295485af248a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8';

  const emojis = [1,2,3,4,5,6,7,8,9];

  return (
    <div>
      {/* {div} */}
      {/* { a%2==0 ? <div>Even</div> : <div>Odd</div> } */}
      {/* { a%2==0 && <div>Even</div>} */}
      {/* {imgUrl && <img src={imgUrl}/>} */}
      <Counter/>
    </div>
    
  )
}

export default App