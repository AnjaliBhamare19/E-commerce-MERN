import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {

 const [menu,setMenu] = useState("menu");

  return (
    <div className='navbar'>
       <img src={assets.logo} alt='logo' className='logo'/>
       <ul className='navbar-menu'>
        <Link to= '/'onClick={() => setMenu("home")}className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")}className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#" onClick={() => setMenu("about-us")}className={menu === "about-us" ? "active" : ""}>About Us</a>
        <a href="#footer" onClick={() => setMenu("contact")}className={menu === "contact" ? "active" : ""}>Contact</a>
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