import React from 'react';
import "../assets/footer.css";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>About Us</h3>
        <p>"Lorem ipsum dolor sit amet,</p>
        <p> consectetur adipiscing elit,</p>
        <p> sed do eiusmod tempor incididunt."</p>
      </div>
      <address className='contacts-footer'>
        <h3>Contacts</h3>
        <ul>
          <li>
             <LocationOnIcon/>
             <a>Tehran, Azadi</a> 
          </li>
          <li>
            <PhoneIcon/>
            <a href='tel:'>021 123456</a>
          </li>
          <li>
            <MailIcon/>
            <a href="mailto:webmaster@example.com">sample@example.com</a>
          </li>
        </ul>
      </address>
      <div className='footer-icons'>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <TwitterIcon/>
          </li>
          <li>
             <FacebookIcon/>
          </li>
          <li>
            <InstagramIcon/>
          </li>
          <li>
            <LinkedInIcon/>
          </li>
          <li>
            <YouTubeIcon/>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer