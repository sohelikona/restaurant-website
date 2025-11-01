// import React from 'react'
// import Hero from './components/Hero'
// import SecondPart from './components/SecondPart'
// import SignatureDish from './components/SignatureDish'
// import Appetizer from './components/Appetizer'
// import MainDish from './components/MainDish'
// import ExploreMenu from './components/ExploreMenu'


// const App = () => {
//   return (
//     <div className='bg-neutral-950 overflow-x-hidden'>
    
//       <Hero />
//       <SecondPart />
//     <SignatureDish />
//     <Appetizer />
//     <MainDish />
//     <ExploreMenu />
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import SecondPart from './components/SecondPart'
import SignatureDish from './components/SignatureDish'
import Appetizer from './components/Appetizer'
import MainDish from './components/MainDish'
import ExploreMenu from './components/ExploreMenu'
import MenuPage from './pages/MenuPage' // <-- create this page
import ReserveTable from './components/ReserveTable'
import GuestReviews from './components/GuestReviews'
import Footer from './components/Footer'

const Home = () => (
  <div className='bg-neutral-950 overflow-x-hidden'>
    <Hero />
    <SecondPart />
    <SignatureDish />
    <Appetizer />
    <MainDish />
    <ExploreMenu />
    <ReserveTable />
    <GuestReviews />
    <Footer />
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  )
}

export default App
