import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../assets/profile.css"

const Profile = () => {
    const {user,isAuthenticated} = useAuth0()
  return (
      isAuthenticated && (
    <div className='profile-container'>
        <img src={user.picture} alt="user"/>
        <h2>{user.name}</h2>
    </div>
      )
  )
}

export default Profile