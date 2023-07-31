import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import allProjects from '../../datas/projects.json'
import './Project.css'
function Project({ title, picture, description, link, id }) {
  let myProjects = allProjects
  const filterProject = myProjects.filter((project) => project.id === id)
  const oneProject = filterProject[0]
  let technoProjet = oneProject.techno

  return (
    <div id="Card">
      <img id="picture" src={picture} alt="projet" />
      <h3 id="title">{title}</h3>
      <p id="description">{description}</p>

      <div className="techno">
        {technoProjet.map((techno, index) => (
          <p key={index}>
            <img className='imgTechno' src={techno} alt={techno} />
          </p>
        ))}
      </div>

      <NavLink className="btnVoirPlus" to={link} target="_blank">
        <button id="btnVoirPlus">Voir Plus</button>
      </NavLink>
    </div>
  )
}

Project.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  techno: PropTypes.array,
}
export default Project

{
  /* <div id="Card">
      <h3 id='title'>{title} </h3>
      <NavLink to={detailLink}>
        <img id="picture" src={picture} alt="projet" />
      </NavLink>
      <p id='description'>{description}</p>
    </div> */
}
