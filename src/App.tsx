import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import NotFound from './pages/NotFound';
import AccesoriosJorge from './projects/AccesoriosJorge';
import Biotec from './projects/Biotec';
import BHB2B from './projects/BHB2B';
import Bombas from './projects/Bombas';
import Comafer from './projects/Comafer';
import FJG from './projects/FJG';
import GamingCity from './projects/GamingCity';
import IncidentStandardization from './projects/IncidentStandardization';
import Kiro from './projects/Kiro';
import Netegia from './projects/Netegia';
import OtraRonda from './projects/OtraRonda';
import ZafiroFarmacias from './projects/ZafiroFarmacias';

function App() {
    return (
        <div className="app-wrapper">
            <div className="bg-glow" aria-hidden="true" />
            <MainLayout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:id' element={<ProjectDetail />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/hire' element={<Hire />} />
                    <Route path='/projects/accesoriosjorge' element={<AccesoriosJorge />} />
                    <Route path='/projects/biotec' element={<Biotec />} />
                    <Route path='/projects/bhb2b' element={<BHB2B />} />
                    <Route path='/projects/bombas' element={<Bombas />} />
                    <Route path='/projects/comafer' element={<Comafer />} />
                    <Route path='/projects/fjg' element={<FJG />} />
                    <Route path='/projects/gamingcity' element={<GamingCity />} />
                    <Route path='/projects/incident-standardization' element={<IncidentStandardization />} />
                    <Route path='/projects/kiro' element={<Kiro />} />
                    <Route path='/projects/netegia' element={<Netegia />} />
                    <Route path='/projects/otraronda' element={<OtraRonda />} />
                    <Route path='/projects/zafirofarm' element={<ZafiroFarmacias />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </MainLayout>
        </div>
    );
}

export default App;