import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import AllProjects from './components/AllProjects/AllProjects'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/projets" element={<AllProjects />} />
        <Route path="/formulaire" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
