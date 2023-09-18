import Project from '../../components/Project/Project'
import dataProject from '../../datas/projects.json'

function AllProjects() {
  return (
    <div id="projets" className="flex-col md:flex-row border-t border-black dark:border-gray-100">
      <h2 className="titleProjet text-3xl font-bold text-center text-black mt-10 mb-10 dark:text-white">
        Mes Projets
      </h2>
      <div id="sectionProjet" className="flex flex-wrap justify-around">
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
