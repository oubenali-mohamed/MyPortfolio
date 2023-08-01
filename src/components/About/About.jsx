/* eslint-disable react/no-unescaped-entities */
import './About.css'
function About() {
  return (
    <div className="containerAbout">
      <div className="aboutMe">
        <p>
          Passionné par le développement web, je suis développeur Junior
          JavaScript/React en quête de nouvelles opportunités. Ma formation m'a
          permis d'acquérir des compétences en développement et comprendre les
          concepts essentiels de JavaScript, j'ai créé des interfaces
          utilisateur avec React. Je suis avide d'apprendre, ouvert à de
          nouveaux défis et prêt à contribuer à des projets innovants au sein
          d'une équipe dynamique. N'hésitez pas à me contacter je serai ravi
          d'échanger avec vous.
        </p>
      </div>
      <div>
        <img
          className="imageAbout"
          src="./src/assets/picture_home.png"
          alt="image home"
        />
      </div>
    </div>
  )
}

export default About
