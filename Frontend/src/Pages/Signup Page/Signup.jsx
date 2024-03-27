import './style.css'

export function Signup() {
    
    return (
        <body id='body'>
          <header id='head'>Hello Friend</header>
          <div className='submit'>
            <input type='text' placeholder=' Name' className='box' />
            <input type='text' placeholder=' Email' classname='box' />
            <input type="text" placeholder=' Password' className='box' />
            <button className='btn'>CONFIRM</button>
          </div>
        </body>
      )
}