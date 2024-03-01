import Navbar from "./components/Navbar";
import './App.css';
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from "./components/Skills";
import Projects from "./components/Projects";



function App() {

  return (
    <div className="App">
      <Navbar/> 
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>

      
      
    </div>
  );
}

export default App;
