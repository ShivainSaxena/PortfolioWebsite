import '../App.css';
import Arduino from '../assets/arduinoProject.mp4';
import Soon from  '../assets/comingsoon.mp4';
import { Typography, Box, Tooltip } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Footer from './Footer';



const Projects = () => {
    return ( 
        <StyledEngineProvider injectFirst>
            <Typography className='projectTitle'>
                Projects
            </Typography>
            <div class="wrapper">
                <div class="project">
                    <video src={Arduino} autoPlay muted loop></video>
                    <div class="descriptions">
                        <h1>Arduino Projects Website</h1>
                        <p>
                            Explore a showcase of my Arduino projects coded in C++ and displayed on a React website deployed through Netlify. The projects range from innovative gadgets to creative automation, where you will witness the intersection of technology and my creativity.
                        </p>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Tooltip title='React' placement='top' arrow>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill-rule="evenodd">
                                    <circle cx="11.996" cy="11.653" r="2.142"/>
                                    <path fill-rule="nonzero" d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"/>
                                </g>
                            </svg>
                            </Tooltip>
                            <Tooltip title='HTML' placement='top' arrow>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  >
                                <g id="c133de6af664cd4f011a55de6b000d0b">
                                    <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501
                                            H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213
                                            l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133
                                            h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62
                                            l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32
                                            l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013
                                            v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z">
                                    </path>
                                </g>
                            </svg>
                            </Tooltip>
                            <Tooltip title='CSS' placement='top' arrow>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                                    <g id="c133de6af664cd4f011a55de6b001a2b">
                                        <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492
                                                V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308
                                                V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034
                                                c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9
                                                l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574
                                                l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542
                                                l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26
                                                l0.26-0.112l109.086-46.639L369.477,176.444z">
                                        </path>
                                    </g>
                                </svg>
                            </Tooltip>
                            <Tooltip title='JavaScript' placement='top' arrow>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                                <g id="5151e0c8492e5103c096af88a51e75c7">
                                    <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958
                                            c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918
                                            C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938
                                            c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857
                                            c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458
                                            c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917
                                            c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822
                                            c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425
                                            c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511
                                            c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969
                                            c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344
                                            C433.706,340.486,474.331,355.693,470.696,409.917z">
                                    </path>
                                </g>
                            </svg>
                            </Tooltip>
                            <Tooltip title='C++' placement='top' arrow>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.078 12A5.928 5.928 0 0 1 12 6.078a5.946 5.946 0 0 1 5.129 2.959l-1.499.867 5.027-2.902a1.579 1.579 0 0 0-.543-.575l-7.345-4.24c-.424-.245-1.116-.245-1.539 0l-7.345 4.24c-.422.244-.768.844-.768 1.333v8.48c0 .245.086.517.226.758l3.529-2.038A5.883 5.883 0 0 1 6.078 12z"/><path d="M14.564 10.519A2.971 2.971 0 0 0 12 9.039a2.964 2.964 0 0 0-2.564 4.441L12 12l2.564-1.481z"/><path d="m20.657 7.002-5.046 2.913-1.046.605-.001-.001L12 12l-2.563 1.48A2.964 2.964 0 0 0 12 14.961a2.97 2.97 0 0 0 2.565-1.481l2.563 1.483a5.944 5.944 0 0 1-5.129 2.959 5.926 5.926 0 0 1-5.128-2.962l-3.529 2.038c.14.242.332.453.543.575l7.345 4.24c.423.245 1.115.245 1.539 0l7.345-4.24c.211-.122.403-.333.543-.575.14-.241.226-.513.226-.758V7.76c0-.245-.086-.517-.226-.758zm-2.735 5.327h-.658v.658h-.657v-.658h-.658v-.658h.658v-.658h.657v.658h.658v.658zm2.468 0h-.658v.658h-.658v-.658h-.657v-.658h.657v-.658h.658v.658h.658v.658z"/></svg>
                            </Tooltip>
                            <Tooltip title='Netlify' placement='top' arrow>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"/>
                                </svg> 
                            </Tooltip>
                        </Box>
                        <button onClick={ () => window.open("https://myarduinoprojects.netlify.app/", '_blank').focus()}>Go to site</button>
                        <button onClick={ () => window.open("https://github.com/ShivainSaxena/ArduinoProjects", '_blank').focus()} >GitHub</button>
                    </div>
                </div>
                <div class="project">
                    <video id='soon' src={Soon} autoPlay muted loop ></video>
                </div>
            </div>
            <Box className='projectFooter'>
                <Footer />
            </Box>
              
        </StyledEngineProvider>    
     );
}
 
export default Projects;