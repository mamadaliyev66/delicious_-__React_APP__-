import Home from './home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipes from './Recipes'
import { Route,Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function Pages() {

  const location= useLocation()
      return (
        
        <AnimatePresence >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/cuisine/:type" element={<Cuisine />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/recipes/:name" element={<Recipes />} />
            </Routes>
        </AnimatePresence>

  )
}

export default Pages