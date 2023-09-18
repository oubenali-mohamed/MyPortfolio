import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import DarkMoon from '../DarkMoon/DarkMoon'
import { useEffect, useState } from 'react'
function Header() {

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div
      id="Header"
      className="flex flex-row justify-between bg-black border-b"
    >
      <Link to="/">
        <img
          id="logoHeader"
          className="w-24 h-24 ml-4"
          src={logo}
          alt="logo de mon protfolio"
        />
      </Link>
      <button className="dark:text-red" onClick={handleThemeDarkMode}>
        <DarkMoon />
      </button>
      <nav id="navigation">
        <BurgerMenu />
      </nav>
    </div>
  )
}
export default Header
