import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile';
import "../assets/login.css"

const Login = () => {
  return (
    <div className='login-page'>
       <div className='login-page-container'>
            <Profile />
            <LoginButton />
            <LogoutButton />
       </div>
    </div>
  )
}

export default Login