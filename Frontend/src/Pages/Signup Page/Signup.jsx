import './style.css'

export function Signup() {
    
    return (
        <body id='body'>
          <header id='head'>Hello Friend</header>
          <div className='submit'>
            <input type="text"  placeholder=" Name"className="box" />
            <input type="email" placeholder=" Email" className="box" />
            <input type="password"  placeholder=" Password" className="box" />
            <button className='btn'>CONFIRM</button>
          </div>
        </body>
      )
}