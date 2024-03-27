import './style.css'

export function LoginPage() {
    return (
        <body id='body'>
          <header id='head'>Welcome Back</header>
          <div className='submit'>
            <input type="text" placeholder=' username' className='usname'/>
            <input type="text" placeholder=' password'className='psword'/>
            <button className='btn'>LOGIN</button>
            <p id='desc'>Not Registered? <b>Create an Account</b></p>
          </div>
        </body>
    )
  }
 