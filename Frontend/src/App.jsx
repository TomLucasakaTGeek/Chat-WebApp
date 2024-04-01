import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const arr1 = ['Hi', 'Heared the News']
//   arr1.forEach(element => {
//     Messenger1(element)
//   });

// const arr2 = ['Hello', 'No what happened']
//   arr2.forEach(element =>{
//     Messenger2(element)
//   })

function Messenger1(prop) {
  return (
    <div className='Text'>{prop}</div>
  )
}

function Messenger2(prop) {
  return (
    <div className='Text'>{prop}</div>
  )
}

function App() {
  let message = "";
  const [messages, setMessages] = useState([]);
  function handleButton() {
    let newArray = [...messages, message];
    setMessages(newArray);
  }

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.emit('message', "hi from client");
    socket.on('message', (data) => {
        console.log('Received message:', data);
        // Update UI or state with received message
    });

    return () => {
        socket.disconnect();
    };
}, []);


  return (
  <>
    <div className='chats'>
      {messages.map((element => <p>{element}</p>))}
      <div className='sendbox'>
        <input type="text" placeholder='type your message here' onInput={(e) => { 
          //if((e.target.value) != '') 
            message = e.target.value;
        }
        }/>
        <button className='sendbtn' onClick = {handleButton}>Send</button>
      </div>
    </div>    
  </>
  )
}

export default App
