import React from 'react'
import "./Footer.css"
// import youtube_icon from ''
// import Twitter_icon from ''
// import instagram_icon from ''
// import facebook_icon from ''

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="" alt="facebook pic" />
        <img src="" alt="facebook pic" />
        <img src="" alt="facebook pic" />
        <img src="" alt="facebook pic" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Investor Relation</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <div className="copyright-text">1997-2024 Netflix, Tnc.</div>
    </div>
  )
}

export default Footer