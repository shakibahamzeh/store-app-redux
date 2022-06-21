import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../assets/logoutBtn.css'
const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <button onClick={()=> logout()} className="logout-btn">
            Log out
        </button>
    )
  )
}

export default LogoutButton;