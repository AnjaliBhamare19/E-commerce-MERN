import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

 const [menu,setMenu] = useState("menu");

  return (
    <div className='navbar'>
       <img src={assets.logo} alt='logo' className='logo'/>
       <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")}className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("product")}className={menu === "product" ? "active" : ""}>Product</li>
        <li onClick={() => setMenu("about-us")}className={menu === "about-us" ? "active" : ""}>About Us</li>
        <li onClick={() => setMenu("contact")}className={menu === "contact" ? "active" : ""}>Contact</li>
       </ul>  
       <div className="navbar-right">
          <img src={assets.search_icon} alt=''/>
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=''/>
            <div className="dot"></div>
          </div>
          <button >Sign In</button>
       </div>
    </div>
  )
}

export default Navbar