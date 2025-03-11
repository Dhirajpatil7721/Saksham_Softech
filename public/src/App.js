import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Component/Nav';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';

function App() {
  return (
  
  
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
   </Router>
    
  );
}

export default App;
