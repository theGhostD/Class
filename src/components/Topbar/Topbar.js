import React from 'react'

import './topbar.css'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topleft'>
        <div className='logo'></div>
          <ul className='navlist'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
      </div>
      <div className='topright'>
        <div className='icon'>
          <img src='/profilepix.jpg' className='userpix' />
        </div>
        <div>Abel</div>
        
      </div>
      
    </div>
  )
}

export default Topbar