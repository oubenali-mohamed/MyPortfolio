import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="burger-menu flex items-center cursor-pointer">
      {isOpen ? (
        <X
          className="icon absolute top-7 right-5 text-5xl -mt-1"
          color="#fff"
          size={48}
          onClick={toggleMenu}
        />
      ) : (
        <Menu
          className="icon absolute top-7 right-5 text-5xl -mt-1"
          color="#fff"
          size={48}
          onClick={toggleMenu}
        />
      )}
      {isOpen && (
        <ul className="menu-links bg-black absolute top-16 right-0 h-full mt-5 w-64 z-10">
          <li className="p-4">
            <Link to="/" className="text-3xl text-white hover:text-cyan-500" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/projets"
              className="text-3xl text-white hover:text-cyan-500"
              onClick={toggleMenu}
            >
              Projets
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/formulaire"
              className= "text-3xl text-white hover:text-cyan-500 "
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default BurgerMenu
