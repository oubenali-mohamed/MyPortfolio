import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './Header.css'

function Header() {
  return (
    <div id="Header">
      <Link to="/">
        <img id="logoHeader" src={logo} alt="logo de mon protfolio" />
      </Link>

      <nav id="navigation">
        <BurgerMenu />
      </nav>
    </div>
  )
}
export default Header
