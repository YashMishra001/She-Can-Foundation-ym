import React from 'react'
import "../Styles/Footer.css"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 She Can Foundation | Designed with ❤ for Empowerment</p>

      <div className="socials">
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
      </div>
    </footer>
  )
}

export default Footer
