import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../assets/loginBtn.css"

const LoginButton = () => {
const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
      <div className='login-btn-container'>
        <h2>Login</h2>
         <button onClick={()=> loginWithRedirect()} className="login-btn">
            login
         </button>
      </div>
      
    )
  )
}

export default LoginButton