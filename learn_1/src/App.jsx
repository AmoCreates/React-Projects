import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data[1]);
  }

  const getData2 = async () => {
    const {data} = await axios.get('https://picsum.photos/v2/list');
    console.log(data[0]);
    
  }

  const user = {
    userName : 'Anmol',
    age : 19,
    creator : 'Amo'
  };

  localStorage.setItem('user', JSON.stringify(user));

  const [num, setNum] = useState(0)

  const [title, setTitle] = useState('Anmol');

  const sumbitHandler = (evt) => {
    evt.preventDefault();
    console.log("Form Sumbitted");
    setTitle('');
    
  }

  return (
    <>
      <div>
        <div id="content">
        <h1>{num}</h1>
      </div>
      <button1 onClick={()=> {
        setNum(num+1);
      }}>INCREASE</button1>

      <button2 onClick={()=> {
        setNum(num-1);
      }}>DECREASE</button2>
      </div>

      <div id='form'>
        <form onSubmit={(evt) => {
          sumbitHandler(evt);
        }}>
          <input type='text' placeholder='Enter something' value={title} onChange={(e) => {
            setTitle(e.target.value);
          }}/>
          <button>Submit</button>
        </form>

        <button onClick={getData}>Get Data</button>
        <button onClick={getData2}>Get Data 2</button>
      </div>

     
      
      
    </>
  )
}

export default App
