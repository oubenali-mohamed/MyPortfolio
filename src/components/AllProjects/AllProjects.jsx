import Project from '../../components/Project/Project'
import dataProject from '../../datas/projects.json'
import './AllProjects.css'
function AllProjects() {
  return (
    <div id="projets">
      <h2 className="titleProjet">Mes Projets</h2>
      <div id="sectionProjet">
        {dataProject.map((projet, id) => (
          <Project
            key={`${projet.title}-${id}`}
            id={projet.id}
            title={projet.title}
            picture={projet.picture}
            description={projet.description}
            link={projet.link}
          />
        ))}
      </div>
    </div>
  )
}
export default AllProjects
