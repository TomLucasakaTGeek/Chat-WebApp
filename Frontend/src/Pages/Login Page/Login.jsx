import './style.css'

export function Login() {
    return (
        <body id='body'>
          <header id='head'>Welcome Back</header>
          <div className='submit'>
            <input type="text" placeholder=' Username' className='box'/>
            <input type="text" placeholder=' Password' className='box'/>
            <button className='btn'>LOGIN</button>
            <p id='desc'>Not Registered? <b>Create an Account</b></p>
          </div>
        </body>
    )
  }
 