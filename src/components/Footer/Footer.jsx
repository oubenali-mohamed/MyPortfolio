import logo from '/assets/logo.png'
import logoLinkedin from '../../../dist/assets/linkedin.png'
import logoGithub from '/assets/github.png'
import logoEmail from '/assets/email.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  let lienLinkedin = 'https://www.linkedin.com/in/mohamed-oubenali'
  let lienGithub = 'https://github.com/oubenali-mohamed'
  let lienEmail = 'mailto:oubenali15@gmail.com'
  return (
    <div id="containerFooter" className='bg-black border-t border-gray-100'>
      <div id="logoReseauSociaux" className='flex flex-row justify-between'>
        <NavLink to="/" id="logoFooter">
          <img id="logoFooter" className ="w-24 h-24 ml-10" src={logo} alt="logo de mon protfolio" />
        </NavLink>
        <div id="reseauSociaux" className='pr-4 mt-8 flex flex-row justify-between'>
          <NavLink to={lienLinkedin} target="_blank">
            <img
              className="logoLinkedin w-8 h-8 mr-4"
              src={logoLinkedin}
              alt="logo linkedin"
            />
          </NavLink>
          <NavLink to={lienGithub} target="_blank">
            <img
              className="logoGithub w-8 h-8 mr-4"
              src={logoGithub}
              alt="logo de mon repository github"
            />
          </NavLink>
          <NavLink to={lienEmail}>
            <img
              className="logoEmail w-8 h-8 mr-4"
              src={logoEmail}
              alt="logo de mon email"
            />
          </NavLink>
        </div>
      </div>
      <p className="paraFooter text-white text-center pb-4">© 2023 ACSW. All rights reserved</p>
    </div>
  )
}
export default Footer
