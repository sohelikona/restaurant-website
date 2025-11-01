
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';

const ExploreMenu = () => {
  const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate('/menu') // this assumes you have a route set for /menu
  // }

  return (
    <div className='bg-neutral-950 h-50 w-screen flex flex-col items-center justify-center p-8 text-white mb-30'>
      <h2 className='text-2xl font-bold mb-4'>Crafting Memorable Experiences</h2>
      {/* <button 
        onClick={() => navigate('/menu')} 
        className='flex items-center gap-2 bg-white text-neutral-800 px-4 py-2 rounded hover:bg-neutral-300 transition'
      >
        Explore Menu
        <ArrowRight size={20} />
      </button> */}
<motion.button
  onClick={() => navigate('/menu')}
  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md cursor-pointer z-40 relative"
  whileHover={{
    scale: 1.05,
    backgroundColor: 'rgba(255,255,255,0.3)',
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
  <span>Explore Menu</span>
  <ArrowRight size={20} />
</motion.button>

    </div>
  )
}

export default ExploreMenu
