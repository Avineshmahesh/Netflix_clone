import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import netflixLogo from '../../assets/netflix-logo.png'
import searchIcon from '../../assets/search-icon.png'
import bellIcon from '../../assets/bell-icon.png'
import profileIcon from '../../assets/profile-icon.webp'
import cartIcon from '../../assets/cart-icon.jpg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={netflixLogo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & popular</li>
                <li>My List</li>
                <li>Browser by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={searchIcon} alt="" className='icons'/>
            <p>children</p>
            <img src={bellIcon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={profileIcon} alt="" className='profile'/>
                <img src={cartIcon} alt="" className='icons'/>
                <div className="dropdown">
                    <p onClick={()=>{
                        logout()
                    }}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar