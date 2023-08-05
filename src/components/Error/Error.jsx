import { NavLink } from 'react-router-dom'


function Error() {
  return (
    <div className='containerError mx-auto mt-48 mb-48 md:ml-48'>
      <span className='error ml-16 font-bold text-9xl text-cyan-800 md:ml-24 lg:ml-96' id='error'>404</span>
      <h1 id='msgError' className='ml-16 mb-20 mt-8 text-2xl text-cyan-800 md:-ml-4 md:text-3xl lg:ml-48'>Oups! La page que vous demandez n'existe pas</h1>
      <NavLink to="/" id="lienHome" className="ml-16 text-xl text-cyan-800 cursor-pointer hover:text-cyan-500 md:ml-20 md:text-2xl lg:ml-80">Retourner sur la page d’accueil</NavLink>
    </div>
    
     
  )
}

export default Error
