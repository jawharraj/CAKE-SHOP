
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
   
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
         
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </div>
  );
}

export default App;



