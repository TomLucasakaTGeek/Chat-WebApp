import { useState } from "react";
import './style.css'

export function Message() {
    let message = "";
    const [messages, setMessages] = useState([]);
    function handleButton() {
      let newArray = [...messages, message];
      setMessages(newArray);
    }
  
    return (
    <>
      <div className='chats'>
        {messages.map((element => <p id='msg'>{element}</p>))}
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