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
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#recipes">Recipes</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#stories">Stories</a>
        </motion.li>

      </ul>

      <motion.div className="logo" whileHover={{ scale: 1.04 }}>
        <img src='/images/logo.png' alt="Logo" />
      </motion.div>

      <ul className="nav-links right">
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#shop">Shop</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#contact">Contact</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.06 }}>
          <a href="#flavour">Flavour</a>
        </motion.li>

      </ul>
    </motion.nav>
  )
}

export default Navbar
