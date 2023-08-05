import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import allProjects from '../../datas/projects.json'

function Project({ title, picture, description, link, id }) {
  let myProjects = allProjects
  const filterProject = myProjects.filter((project) => project.id === id)
  const oneProject = filterProject[0]
  let technoProjet = oneProject.techno

  return (
    <div id="Card" className="flex-col w-80 h-80 mb-16 rounded-md">
      <img
        id="picture"
        className="h-44 w-44 object-cover m-auto -mt-12"
        src={picture}
        alt="projet"
      />
      <h3 id="title" className="  text-white ml-28 -mt-6 text-xm md:text-2xl">
        {title}
      </h3>
      <p id="description" className="text-xm text-center text-white pt-2">
        {description}
      </p>

      <div className="techno flex flex-row justify-around mt-2">
        {technoProjet.map((techno, index) => (
          <p key={index}>
            <img
              className="imgTechno w-7 h-7 mt-2 mb-2 md:w-9 md:h-9 md:mt-0"
              src={techno}
              alt={techno}
            />
          </p>
        ))}
      </div>

      <NavLink className="btnVoirPlus " to={link} target="_blank">
        <button
          id="btnVoirPlus"
          className="w-36 h-10 ml-20 rounded-md text-white"
        >
          Voir
        </button>
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
