import logo from '/assets/logo.png'
import logoLinkedin from '/assets/linkedin.png'
import logoGithub from '/assets/github.png'
import logoEmail from '/assets/email.png'
import { NavLink } from 'react-router-dom'
import './Footer.css'
function Footer() {
  let lienLinkedin = 'https://www.linkedin.com/in/mohamed-oubenali'
  let lienGithub = 'https://github.com/oubenali-mohamed'
  let lienEmail = 'mailto:oubenali15@gmail.com'
  return (
    <div id="containerFooter">
      <div id="logoReseauSociaux">
        <NavLink to='/' id="logoFooter">
          <img id="logoFooter" src={logo} alt="logo de mon protfolio" />
        </NavLink>
        <div id="reseauSociaux">
          <NavLink to={lienLinkedin} target="_blank">
            <img
              className="logoLinkedin"
              src={logoLinkedin}
              alt="logo linkedin"
            />
          </NavLink>
          <NavLink to={lienGithub} target="_blank">
            <img
              className="logoGithub"
              src={logoGithub}
              alt="logo de mon repository github"
            />
          </NavLink>
          <NavLink to={lienEmail}>
            <img
              className="logoEmail"
              src={logoEmail}
              alt="logo de mon email"
            />
          </NavLink>
        </div>
      </div>
      <p className="paraFooter">© 2023 ACSW. All rights reserved</p>
    </div>
  )
}
export default Footer
