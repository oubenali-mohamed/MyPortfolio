import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './BurgerMenu.css'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="burger-menu">
      {isOpen ? (
        <FiX className="icon" onClick={toggleMenu} />
      ) : (
        <FiMenu className="icon" onClick={toggleMenu} />
      )}
      {isOpen && (
        <ul className="menu-links">
          <li>
            <Link to="/" className="lien"  onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/projets" className="lien" onClick={toggleMenu}>
              Projets
            </Link>
          </li>
          <li>
            <Link to="/formulaire" className="lien" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default BurgerMenu
