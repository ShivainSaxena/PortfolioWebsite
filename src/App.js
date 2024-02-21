import Navbar from "./components/Navbar";
import './App.css';
import LandingPage from "./components/LandingPage";
import { Grid, Typography, Box } from '@mui/material';
import About from "./assets/about.png";
import { StyledEngineProvider } from '@mui/material/styles';
import { motion } from "framer-motion";


function App() {

  return (
    <div className="App">
      <Navbar/> 
      <LandingPage/>
      <StyledEngineProvider>
        <Grid container spacing={1} id='about'>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={10}>
            <Box display={{xs: "flex", sm: "none"}} flexDirection={'column'} alignItems={"center"}>
              <Typography id="aboutTitle"
              component={motion.p}
              initial='hidden'
              whileInView='visible'
              viewport={{once: true}}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: {opacity: 0, translateX: -50},
                visible: {opacity: 1, translateX: 0}
              }}>About Me</Typography>
              <motion.img src={About} alt="Profile" className="profile"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
                variants={{
                  hidden: {opacity: 0, translateX: 50},
                  visible: {opacity: 1, translateX: 0}
                }}/>
              <Typography textAlign={"center"} id='aboutBody'
              component={motion.p}
              initial='hidden'
              whileInView='visible'
              viewport={{once: true}}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: {opacity: 0, translateX: -50},
                visible: {opacity: 1, translateX: 0}
              }}>Hi, I am a grade 12 student deeply enthusiastic about programming, web development, and robotics. My fascination resides at the intersection of hardware and software, fueled by a dedicated commitment to crafting innovations that push the boundaries of engineering. My hobbies include reading, playing basketball, and baking. </Typography>
            </Box>
            <Box display={{xs: "none", sm: "flex"}} flexDirection={'column'} className='aboutBox'>
              <Typography id="aboutTitle" component={motion.p}
              initial='hidden'
              whileInView='visible'
              viewport={{once: true}}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: {opacity: 0, translateX: -150},
                visible: {opacity: 1, translateX: 0}
              }}>About Me</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography id='aboutBody'
                component={motion.p}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                  delay: 0.2
                }}
                variants={{
                  hidden: {opacity: 0, translateX: -150},
                  visible: {opacity: 1, translateX: 0}
                }}>Hi, I am a grade 12 student deeply enthusiastic about programming, web development, and robotics. My fascination resides at the intersection of hardware and software, fueled by a dedicated commitment to crafting innovations that push the boundaries of engineering. My hobbies include reading, playing basketball, and baking. </Typography>
                <motion.img src={About} alt="Profile" className="profile"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                  delay: 0.4
                }}
                variants={{
                  hidden: {opacity: 0, translateX: 150},
                  visible: {opacity: 1, translateX: 0}
                }}/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1}>

          </Grid>
        </Grid>
      </StyledEngineProvider>
      
      
    </div>
  );
}

export default App;
