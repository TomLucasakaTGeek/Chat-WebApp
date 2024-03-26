import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './Login Page/Login.jsx'

function Message() {
  let message = "";
  const [messages, setMessages] = useState([]);
  function handleButton() {
    let newArray = [...messages, message];
    setMessages(newArray);
  }

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

function App() {
  //Login Routing
  return <LoginPage/>
}
export default App
