/* eslint-disable react/no-unescaped-entities */

function About() {
  return (
    <div className="containerAbout flex flex-col md:flex-row justify-between pb-20">
      <div className="aboutMe w-full md:w-1/2 ">
        <p className="text-justify text-md text-black pr-4 pl-4 dark:text-white">
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
      <div className="imageAbout w-full md:w-1/2 md:pl-32 md:my-auto lg:-mt-14  ">
        <img src="/assets/picture_home.png" alt="image home" />
      </div>
    </div>
  )
}

export default About
