import React from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 12 }}
    >
      <ul className="nav-links left">
        <li><motion.a href="#about" whileHover={{ scale: 1.06 }}>About</motion.a></li>
        <li><motion.a href="#recipes" whileHover={{ scale: 1.06 }}>Recipes</motion.a></li>
        <li><motion.a href="#recipes" whileHover={{ scale: 1.06 }}>Stories</motion.a></li>

      </ul>

      <div className="logo">
        <img src='/images/logo.png' alt="Logo" />
      </div>

      <ul className="nav-links right">
        <li><motion.a href="#shop" whileHover={{ scale: 1.06 }}>Shop</motion.a></li>
        <li><motion.a href="#contact" whileHover={{ scale: 1.06 }}>Contact</motion.a></li>
        <li><motion.a href="#contact" whileHover={{ scale: 1.06 }}>Flavour</motion.a></li>

      </ul>
    </motion.nav>
  )
}

export default Navbar
