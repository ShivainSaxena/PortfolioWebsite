import Navbar from "./components/Navbar";
import './App.css';
import LandingPage from "./components/LandingPage";
import { Grid, Typography, Box } from '@mui/material';



function App() {

  return (
    <div className="App">
      <div className="firstScreen">
        <Navbar/>      
        <LandingPage/>
        <Box flexGrow={1}></Box>
      </div>
      <h1>About Me</h1>
    </div>
  );
}

export default App;
