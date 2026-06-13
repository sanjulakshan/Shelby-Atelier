import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import NewArrivals from './pages/NewArrivals'
import Collections from './pages/Collections'
import Abayas from './pages/Abayas'
import EveningWear from './pages/EveningWear'
import ResortCollection from './pages/ResortCollection'
import BespokeServices from './pages/BespokeServices'
import Lookbook from './pages/Lookbook'
import Journal from './pages/Journal'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/abayas" element={<Abayas />} />
        <Route path="/evening-wear" element={<EveningWear />} />
        <Route path="/resort-collection" element={<ResortCollection />} />
        <Route path="/bespoke-services" element={<BespokeServices />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
