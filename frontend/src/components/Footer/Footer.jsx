import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} className='logo' />
          <p>
          Govardhan Farms is dedicated to delivering safe, hygienic, and healthy food to consumers. Govardhan Farms aims to create a sustainable and equitable ecosystem for farmers. 
          </p>
          <div className='footer-social-icons'>
            <img src={assets.twitter_icon} />
            <img src={assets.instagram_icon} />
            <img src={assets.youtube_icon} />
            <img src={assets.whatsapp_icon} />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <p><strong className='footer-content-right-header'>Factory:</strong><br />
                Gat No. 314/2/1, A/P Mohadi, Tal.Dindori,Nashik - 42207, Maharashtra, India
              </p>
            </li>
            <li>
              <p><strong className='footer-content-right-header'>Phone:</strong><br />
                1800 212 002 020
              </p>
            </li>
            <li>
              <p><strong className='footer-content-right-header'>Email:</strong><br />
                info@govardhanfarms.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className='footer-copyright'>
        <p>
          ©Govardhan Farms Post Harvest Care Ltd.
        </p>
      </div>
      <img src={assets.footer_bg} style={{width : "100%"}}/>
    </div>
  )
}

export default Footer