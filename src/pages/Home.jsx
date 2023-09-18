import React, { useEffect, useState } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import imageHome from '/assets/MyProfilPicture.png'
import DarkMoon from '../components/DarkMoon/DarkMoon'
import '../styles.css'

function Home() {
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
    <div className="App bg-slate-300  dark:bg-black ">
      <button className="dark:text-red" onClick={handleThemeDarkMode}>
        <DarkMoon />
      </button>
      <img
        className="imageHome w-52 mx-auto mb-40 pt-20 object-cover   "
        src={imageHome}
        alt="image home"
      />
      <h1 className="titleMain text-5xl font-bold text-center  uppercase mb-20 -mt-11">
        developpeur web JavaScript React Js
      </h1>

      <About />
      <AllProjects />
      <Contact />
    </div>
  )
}

export default Home
