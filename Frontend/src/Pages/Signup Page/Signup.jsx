import './style.css'

export function Signup() {
    
    return (
        <body id='body'>
          <header id='head'>Welcome Back</header>
          <div className='submit'>
            <input type="text" placeholder='Name' className='box'/>
            <input type="text" placeholder='Email' classname='box' />
            <input type="text" placeholder='password'className='box'/>
            <button className='btn'>SIGN UP</button>
            <p id='desc'>Not Registered? <b>Create an Account</b></p>
          </div>
        </body>
      )
}