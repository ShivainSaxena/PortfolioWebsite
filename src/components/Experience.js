import { StyledEngineProvider } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import '../App.css';
import { motion } from "framer-motion";


const Experience = () => {
    return ( 
        <StyledEngineProvider injectFirst>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography className='experienceHead'>
                    Experience
                </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <div class="timeline">
                    <div class="outer">
                        <motion.div class="card"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        transition={{
                            duration: 1.8,
                            ease: 'easeInOut',
                        }}
                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}>
                            <div class="info">
                                <h3 class="extitle">Flight Sergeant</h3>
                                <h4 className="explace">Royal Canadian Air Cadets</h4>
                                <h5 className="exdate">Sep 2018 - Present</h5>
                                <p className='exdescription'>- Led weekly training sessions for 20+ cadets, covering diverse topics including aviation, survival, leadership, and discipline. <br /><br />
                                - Organized large-scale squadron events, including fitness assessments, sports days, and field training exercises for over 200 cadets. <br /><br />
                                - Actively supported fundraising initiatives and community engagement through events like poppy sales, food drives, and cash calendar sales, demonstrating commitment to the squadron's objectives.</p>
                            </div>
                        </motion.div>
                        <motion.div class="card"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        transition={{
                            duration: 1.8,
                            ease: 'easeInOut',
                        }}
                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}>
                            <div class="info">
                                <h3 class="extitle">Flyer Distributor</h3>
                                <h4 className="explace">Edmonton Flyer Force</h4>
                                <h5 className="exdate">Jul 2020 - Sep 2022</h5>
                                <p className='exdescription'>- Effectively managed the weekly delivery of 250 flyers to houses in the neighborhood <br /><br />
                                - Balanced the demands of flyer distribution with school and extracurriculars <br /><br />
                                - Adapted seamlessly to route changes and increasing workloads, consistently meeting deadlines and increasing social awareness during COVID</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Box>
        </StyledEngineProvider>
    );
}
 
export default Experience;