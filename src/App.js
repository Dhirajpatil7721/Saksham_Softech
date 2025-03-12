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
import Hospital from './Pages/Portfoilios/Hospital ';
import Education from './Pages/Portfoilios/Education';
import Pharma from './Pages/Portfoilios/Pharma';
import Healthcare from './Pages/Portfoilios/Healthcare';
import Job from './Pages/Portfoilios/Job';
import Dairy from './Pages/Portfoilios/Dairy';
import ELearning from './Pages/Portfoilios/ELearning';
import Restaurant from './Pages/Portfoilios/Restaurant';
import Billing from './Pages/Portfoilios/Billing';
import Software from './Services/Software';
import Web from './Services/Web';
import It from './Services/It';
import Cybersecurity from './Services/Cybersecurity';
import Cloud from './Services/Cloud';
import Ecommerce from './Services/Ecommerce';
import Career from './Pages/Career';
import ApplyContact from './Pages/ApplyContact';
import Chatbot from './Component/Chatbot';

function App() {
  return (
  
  
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/carrer" element={<Career/>} ></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      {/* <Route path="/apply" element={<ApplyContact/>}></Route> */}
  
  {/* Portfolios */}
      <Route path="/hospital" element={<Hospital/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/pharma" element={<Pharma/>}></Route>
      <Route path="/healthcare" element={<Healthcare/>}></Route>
      <Route path="/job" element={<Job/>}></Route>
      <Route path="/dairy" element={<Dairy/>}></Route>
      <Route path="/elearning" element={<ELearning/>}></Route>
      <Route path="/restaurant" element={<Restaurant/>}></Route>
      <Route path="/billing" element={<Billing/>}></Route>

{/* Services       */}
      <Route path="/software" element={<Software/>}></Route>
      <Route path="/web" element={<Web/>}></Route>
      <Route path="/it" element={<It/>}></Route>
      <Route path="/cybersecurity" element={<Cybersecurity/>}></Route>
      <Route path="/cloud" element={<Cloud/>}></Route>
      <Route path="/ecommerce" element={<Ecommerce/>}></Route>



    </Routes>
    <Chatbot/>
    <Footer/>
   </Router>
    
  );
}

export default App;
