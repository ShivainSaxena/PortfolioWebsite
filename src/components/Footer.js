import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return ( 
        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="mailto:shivainsaxena@gmail.com">
                    <MailIcon fontSize='large'></MailIcon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" target="_blank" rel='norefferer' href="https://github.com/ShivainSaxena">
                    <GitHubIcon fontSize='large'></GitHubIcon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" target='_blank' rel="norefferer" href="http://www.linkedin.com/in/shivain-saxena">
                    <LinkedInIcon fontSize='large'></LinkedInIcon>
                    </a></li>
            </ul>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
                <li class="menu__item"><div class="menu__link" onClick={() => {
                        if (window.location.pathname === '/'){
                            document.getElementById('about').scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                                });
                        } else {
                            window.location.href = '/';
                        }

                    }} style={{cursor: 'pointer'}}>
                        About
                    </div>
                </li>
                <li class="menu__item"><a class="menu__link" href="/skills">Skills</a></li>
                <li class="menu__item"><a class="menu__link" href="/projects">Projects</a></li>
                <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li>

            </ul>
            <p>&copy;2024 Shivain Saxena | All Rights Reserved</p>
        </footer>
     );
}
 
export default Footer;