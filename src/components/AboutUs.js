import React from 'react';
import '../assets/aboutUs.css';


const AboutUs = () => {
  const userData= [
    {id:0,title:"Phoenix Baker",description:"Product Manager",image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id:1,title:"Natali Craig",description:"Human Resources Manager",image:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {id:2,title:"Patrick Perkins",description:"UX Researcher",image:"https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {id:3,title:"Drew Cano",description:"ّFounder & CEO",image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {id:4,title:"Lana Steiner",description:"Engineering Manager",image:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {id:5,title:"Orlando Diggs",description:"Product Designer",image:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {id:6,title:'Olga Zabegina',description:"Front-End Developer",image:"https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id:7,title:"Noah Pierre",description:"Back-End Developer",image:"https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ]
  
  return (
    <div className='about-us-container'>
      <div className='about-us-content'>
        <h2>Our Team</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into </p>
      </div>
      <div className="team-container"> 
        {
          userData.map(user => 
          <li key={user.id}>
            <img src={user.image} alt="user"/>
            <h2>{user.title}</h2>
            <p>{user.description}</p>
          </li>)
        }
      </div>
    </div>
  )
}

export default AboutUs;