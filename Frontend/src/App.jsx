import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const arr1 = ['Hi', 'Heared the News']
  arr1.forEach(element => {
    Messenger1(element)
  });

const arr2 = ['Hello', 'No what happened']
  arr2.forEach(element =>{
    Messenger2(element)
  })

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
  return (
    <>
      <div className='chats'>
        <Messenger1 />
        <Messenger2 />
      </div>
      <div className='sendbox'>
        <input type="text" placeholder='type your message here'/>
        <button className='sendbtn'>Send</button>
      </div>
    </>
  )
}

export default App
