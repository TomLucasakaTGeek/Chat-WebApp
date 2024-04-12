import './style.css'
import { NavLink } from 'react-router-dom'

export function Login() {
    return (
        <body id='body'>
          <header id='head'>Welcome Back</header>
          <div className='submit'>
            
            <input type="text" placeholder=' Username' className='box'/>
            <input type="text" placeholder=' Password' className='box'/>
            <button className='btn'>LOGIN</button>

            <p className='desc'>Not Registered?  
              <NavLink className='desc' to='/signup'>
                <b>Create an Account</b>
              </NavLink>
            </p>

          </div>
        </body>
    )
  }
 