import React from 'react'
import SignUp from '../SignUp/SignUp'
import Login from '../ExistingUser/Login'
import "./mainLogin.css"

const MainLogin = () => {
  return (
    
    <div className='MainLogin__container'>
      <Login/>
      <SignUp/>
    </div>
  )
}

export default MainLogin
