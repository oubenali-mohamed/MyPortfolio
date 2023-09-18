import { ChevronUpCircle } from 'lucide-react'

const ScroolTo = () => {

    const scrollTo = document.querySelector('.scrollTo')

    scrollTo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  return <ChevronUpCircle color="#26a0da" size={40} className='scrollTo fixed bottom-5 right-5 cursor-pointer' />
}

export default ScroolTo
