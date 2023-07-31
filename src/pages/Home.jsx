import React, { useEffect } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import imageHome from '/assets/MyProfilPicture.png'
import '../styles.css'
function Home() {
  return (
    <div className="App">
      <img className="imageHome" src={imageHome} alt="image home" />
      <h1 className="titleMain">developpeur web JavaScript React Js</h1>{' '}
      <About />
      <AllProjects />
      <Contact />
    </div>
  )
}

export default Home
