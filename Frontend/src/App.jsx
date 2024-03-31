import './App.css'
import { Home } from './Pages/Home Page/Home.jsx'
import { Signup } from './Pages/Signup Page/Signup.jsx'
import { Login } from './Pages/Login Page/Login.jsx'
import { Message } from './Pages/Messaging Page/Message.jsx'
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
