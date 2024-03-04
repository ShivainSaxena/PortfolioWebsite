import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {Suspense} from "react";
import Loader from './animations/Loader';

const LandingPage = React.lazy(() => import("./components/LandingPage"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Navbar/> 
        <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </Suspense>

      
      
    </div>
  );
}

export default App;
