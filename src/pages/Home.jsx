import React from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import imageHome from '/assets/MyProfilPicture.png'
import '../styles.css'
import ScroolTo from '../components/ScrollTo/ScroolTo'

function Home() {
  return (
    <div className="App bg-slate-300  dark:bg-black ">
      <ScroolTo />
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
