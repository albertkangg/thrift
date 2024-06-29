import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>NAME TBA</h2>
            <Link to='/about-us'>About us</Link>
            <Link to='/'>Our Vision</Link> 
            <Link to='/'>Impact</Link> 
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Sell on NAME TBA</Link>
            <Link to='/'>SOMETHING</Link> 
          </div> 
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Help</h2>
            <Link to='/'>Help Centre</Link>
            <Link to='/'>SOMETHING</Link>
            <Link to='/'>SOMETHING</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div class='footer-logo'>
            <div className='social-logo'>
              <span style={{ fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
              NAME TBA © 2024
           </span>
            </div>
          </div>
            <div class='website-rights'>
            <Link to="/terms-and-conditions" className="terms-link">
              <small>Terms and Conditions</small>
            </Link>
            <small> | </small>
            <small>Privacy Policy</small>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
    
            <Link
              class='social-icon-link LinkedIn'
              to='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;