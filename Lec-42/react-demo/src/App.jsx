import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Person from "./components/Person";

function App() {

  const personData = [
    {
      name:"Samarth",
      age:"28",
      profession:"Web Developer"
    },
    {
      name:"Shubham",
      age:"23",
      profession:"C++ Developer"
    },
    {
      name:"Arun",
      age:"34",
      profession:"Senior developer"
    },
    {
      name:"Amit",
      age:"40",
      profession:"CEO"
    },
    
  ]

  const list = ['Go to Swimming pool', 'Buy Groceries', 'make list', 'doubt solve'];
  return (
    // <div>Hello! This is our first react app</div>
    <>
      {/* <Cat/>
      <Dog/>
      <Dog/> */}
      {/* <Person name="Samarth" age="28" profession="developer"></Person>
      <Person name="Yogesh" age="25" profession="SDE-2"></Person>
      <Person></Person>
      <Person></Person> */}

      {/* {personData.map((data)=>{
        return <Person name={data.name} age={data.age} profession={data.profession}></Person>
      })} */}

      <ul>
        {list.map(todo =>{
          return <li>{todo}</li>
        })}
      </ul>
    </>
  );
}

export default App;
