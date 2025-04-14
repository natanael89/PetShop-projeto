import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from '../components/common/Header'
import { HeroSlide }  from '../components/common/HeroSlide'
import { Home } from '../pages/Home'
import { Produtos } from '../pages/Produtos'
import { Footer } from '../components/common/Footer'
import { Galeria } from '../pages/Galeria'
import { SiteProvider } from '../context/site-context'
import { GalleryProvider } from '../context/galeriaContext'
import { Contato } from '../pages/Contato'


function App() {
  
  return (
      <Router>
        <div>
          <div className='mx-auto'>
           <SiteProvider>
             <Header />
               <HeroSlide />
                <GalleryProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/galeria" element={<Galeria/>} />
                    <Route path="/galeria" element={<Galeria/>} />
                    <Route path="/contato" element={<Contato/>} />
                  </Routes>
              </GalleryProvider>
             <Footer />
           </SiteProvider>
          </div>
        </div>
      </Router>
  )
}

export default App
