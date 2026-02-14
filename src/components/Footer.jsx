import React from 'react';
import { Link } from "react-router-dom";
import { FaSquareTwitter, FaSquareInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div><img src="/logo.png" alt="logo" /></div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Bihar, INDIA</li>
          <li>donate@mail.com</li>
          <li>+91 12447 42114</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>HOME</Link></li>
          <li><Link to={"/donate"}>DONATE US</Link></li>
          <li><Link to={"/about"}>ABOUT</Link></li>
          <li><Link to={"/contact"}>CONTACT</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow US</h4>
        <ul>
          <li><Link to={"/"}> <span><FaSquareTwitter /></span> <span>Twiter</span></Link></li>
          <li><Link to={"/"}> <span><FaYoutube /></span> <span>YouTube</span></Link></li>
          <li><Link to={"/"}> <span><FaSquareInstagram /></span> <span>Instagram</span></Link></li>
          <li><Link to={"/"}> <span><FaLinkedin /></span> <span>Linkedin</span></Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer