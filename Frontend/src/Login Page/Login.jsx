import './style.css'

export function LoginPage() {
    return (
        <div className='body'>
          <div className='submit'>
            <input type="text" placeholder=' username' className='usname'/>
            <input type="text" placeholder=' placeholder'className='psword'/>
            <button className='btn'>LOGIN</button>
            <p id='desc'>Not Registered? <b>Create an Account</b></p>
          </div>
        </div>
    )
  }
 