import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'


function Header() {
  return (
    <div id="Header" className='flex flex-row justify-between bg-black border-b'>
      <Link to="/">
        <img id="logoHeader" className='w-24 h-24 ml-4' src={logo} alt="logo de mon protfolio" />
      </Link>

      <nav id="navigation" >
        <BurgerMenu />
      </nav>
    </div>
  )
}
export default Header
