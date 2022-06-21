import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../assets/profile.css"

const Profile = () => {
    const {user,isAuthenticated} = useAuth0()
  return (
      isAuthenticated && (
    <div className='profile-container'>
        <h2>Welcome!</h2>
        <img src={user.picture} alt="user"/>
        <h3>{user.name}</h3>
    </div>
      )
  )
}

export default Profile