import { useEffect, useState } from 'react';
import { Typography, Box, Alert, Snackbar} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import '../App.css';
import GlobeMP4 from '../assets/globe3.mp4';
import GlobeWeb from '../assets/globe3.webm';
import { motion } from 'framer-motion';

// Contact page with animated globe and email form w/ form validation

const Contact = () => {
    // Shift value for globe animation
    const [shift, setShift] = useState(null); 

    // Session stored boolean to ensure animation only runs once for the user's time on the website
    const [stillNeedsToRun] = useState(JSON.parse(sessionStorage.getItem('myBooleanKey')));

    // State variable to control which toast to show depending on user input in form
    const [toast, setToast] = useState(0);
    
    setTimeout(() => {
        sessionStorage.setItem('myBooleanKey', JSON.stringify(true));
    }, 2000);

    // Calculate shift value for animation every time component mounts
    useEffect(() => {
        const globeWidth = (-8.333*16) + ((48.611 / 100) * window.innerWidth);
        let shift = (window.innerWidth / 2) - (globeWidth / 1.75);
        setShift(shift);
    }, [])

    // State to hold form data as object
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Continuously update state variable as form input is changed
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle toast when it is closed or duration ends
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setToast(0);
    };

    // Function to run when user submits email form and display according toast for form validation
    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message || formData.email.indexOf('@') === -1) {
            setToast(3);
            return;
          }
        try {
          const response = await fetch('/.netlify/functions/submitForm', {
            method: 'POST',
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setToast(1);
          } else {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setToast(2);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
    return ( 
        <StyledEngineProvider injectFirst>
            <Box display={'flex'} flexDirection={{xs: 'column', lg: 'row'}}>
                <Box alignSelf={'center'}>
                    <motion.div 
                    viewport={{once: true}}
                    transition={{
                        duration: 4,
                        ease: 'easeInOut',
                    }}
                    animate={!stillNeedsToRun && window.innerWidth > 1200 ? {
                        opacity: [0, 1, 1],
                        x: [shift, shift, 0]
                    } : {opacity: 1}}   
                    className='globe'>
                        <video autoPlay muted playsInline loop>
                            <source src={GlobeWeb} type='video/webm'/>
                            <source src={GlobeMP4} type='video/mp4'/>
                        </video>
                        <div className="shadow"></div>
                    </motion.div>
                </Box>
                <Box className='contactContent'>
                    <Typography 
                    className='contactHeader'
                    component={motion.p}
                    animate={!stillNeedsToRun && window.innerWidth > 1200 ? {
                        opacity: [0, 1]
                    }: {opacity: 1}}
                    transition={{
                        duration: 1.4,
                        ease: 'easeInOut',
                        delay: 2.9
                    }}>
                        Get In Touch!
                    </Typography>
                    <motion.div
                    animate={ !stillNeedsToRun && window.innerWidth > 1200 ? {
                        opacity: [0, 1],
                        y: [-30, 0]
                    }: {opacity: 1, y: 0}}
                    transition={{
                        duration: 1.4,
                        ease: 'easeInOut',
                        delay: 3
                    }}>
                        <div className="inputLabelGroup">
                            <input type="text" name='name' required onChange={handleChange} value={formData.name}/>
                            <label className='floatingLabel'>Name</label>
                        </div>
                        <div className="inputLabelGroup">
                            <input type="type" name='email' required onChange={handleChange} value={formData.email}/>
                            <label className='floatingLabel'>Email</label>
                        </div>
                        <div className="inputLabelGroup">
                            <textarea required name='message'  rows={5} onChange={handleChange} value={formData.message}></textarea>
                            <label className='floatingLabel'>Message</label>
                        </div>
                        <button onClick={handleSubmit}>Send</button>
                    </motion.div>
                    
                    <Box mt={5}>
                        <motion.ul className="social-btns"
                        animate={ !stillNeedsToRun && window.innerWidth > 1200 ? {
                            opacity: [0, 1],
                            x: [-30 , 0]
                        }: {opacity: 1, x: 0}}
                        transition={{
                            duration: 1.4,
                            ease: 'easeInOut',
                            delay: 3.1
                        }}
                        >
                            <li style={{'--clr': '#0A66C2'}}>
                                <a href="http://www.linkedin.com/in/shivain-saxena" target='_blank' rel="norefferer">
                                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" >
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li style={{'--clr': '#808080'}}>
                                <a href="https://github.com/ShivainSaxena" target='_blank' rel="norefferer">
                                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" >
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li style={{'--clr': '#DD4235'}}>
                                <a href="mailto:shivainsaxena@gmail.com">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Complete">
                                            <g id="mail">
                                                <g>
                                                <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <rect fill="none" height="14" rx="2" ry="2" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="6.5"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </motion.ul>
                    </Box>
                </Box>
            </Box>
            <Snackbar open={toast === 1} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleClose}>
                <Alert
                severity="success"
                variant="filled"
                >
                Email sent succesfully!
                </Alert>
            </Snackbar>
            <Snackbar open={toast === 2} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleClose}>
                <Alert
                severity="error"
                variant="filled"
                >
                Error sending email!
                </Alert>
            </Snackbar>
            <Snackbar open={toast === 3} autoHideDuration={7000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleClose}>
                <Alert
                severity="warning"
                variant="filled"
                >
                Please fill out all fields! (Email MUST contain '@')
                </Alert>
            </Snackbar>
        </StyledEngineProvider>
     );
}
 
export default Contact;