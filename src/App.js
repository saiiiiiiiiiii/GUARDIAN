
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NoCodePlatform from "./pages/NoCodePlatform/NoCodePlatform"
import AboutUs from "./pages/AboutUs/AboutUs"
import LegitimacyProtocol from './pages/LegitimacyProtocol/LegitimacyProtocol';
import Partners from './pages/Partners/Partners';
import Home from './pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>  
    <Routes>
    <Route path="/" exact element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/nocodeplatform" element={<NoCodePlatform/>}/>
      <Route path="/legitimacyprotocol" element={<LegitimacyProtocol/>}/>
      <Route path="/partners" element={<Partners/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
