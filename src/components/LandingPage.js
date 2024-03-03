import Back from '../assets/heroback.mp4';
import { Grid, Typography, Box } from '@mui/material';
import '../App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import Aboutsection from "./Aboutsection";
import Experience from './Experience';
import Footer from './Footer';



const LandingPage = () => {
    return ( 
        <StyledEngineProvider injectFirst>
            <div className='firstScreen'>
                <video src={Back} autoPlay muted loop playsInline className="backdrop"></video>
                <div className="overlay"></div>
                <Grid container spacing={1}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Box display={"flex"} flexDirection="column" alignItems={"center"}> 
                            <Typography variant="h4" sx={{marginTop: '20vh'}} gutterBottom className="mainDesc"
                            component={motion.h4}
                            animate={{
                                translateY: [50, -20, 0],
                                opacity: [0, 0.5, 1]
                            }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeInOut',
                            }}>
                                Hi! I'm
                            </Typography>
                            <br />
                            <Typography variant="h1" gutterBottom className="mainTitle" 
                            component={motion.h1}
                            animate={{
                                translateY: [50, -20, 0],
                                opacity: [0, 0.5, 1]
                            }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeInOut',
                                delay: 1
                            }}>
                                Shivain Saxena
                            </Typography>
                            <br />
                            <Typography variant="h4" className="mainDesc"
                            component={motion.h4}
                            animate={{
                                translateY: [50, -20, 0],
                                opacity: [0, 0.5, 1]
                            }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeInOut',
                                delay: 2
                            }}>
                                A Grade 12 student at Old Scona Academic High School
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Box display={"flex"} justifyContent={"center"}>
                        <section className="arrowContainer">
                            <div style={{cursor: 'pointer'}} onClick={() => {
                                document.getElementById('about').scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                    });
                            }}><span></span></div>
                        </section>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Box flexGrow={1}></Box>
            </div>
            <Aboutsection/>
            <Experience />
            <Box display={'flex'} justifyContent={'center'}>
                <Typography className='backTop' onClick={() => {
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}>
                    Back to top
                </Typography>
            </Box>
            <Footer />
        </StyledEngineProvider>
     );
}
 
export default LandingPage;