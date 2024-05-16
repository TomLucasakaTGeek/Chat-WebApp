import './App.css'
import { Home } from './Components/Pages/Home Page/Home.jsx'
import { Signup } from './Components/Pages/Signup Page/Signup.jsx'
import { Login } from './Components/Pages/Login Page/Login.jsx'
import { Message } from './Components/Pages/Messaging Page/Message.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {  

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <><Login/></>
    },
    {
      path:'/signup',
      element: <><Signup/></>
    },
    {
      path: '/chat',
      element: <><Message/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
