import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
        <X className='icon' color="#fff" size={49} onClick={toggleMenu} />
      ) : (
        <Menu className='icon' color="#fff" size={48} onClick={toggleMenu} />
      )}
      {isOpen && (
        <ul className="menu-links">
          <li>
            <Link to="/" className="lien" onClick={toggleMenu}>
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
