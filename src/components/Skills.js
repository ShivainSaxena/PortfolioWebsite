import Footer from "./Footer";
import { Grid, Typography, Box, Chip } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import '../App.css';
import Skillstar from "../animations/Skillstar";


/*
 TODO: 
    - Add an animation for the first time the user enters the skills section of the page
    This animation will start off the Skills header centered as usual and then the skill star will fade in shortly after and and then it will slide off to the side and then the languages and frameworks will fade in afterwards
    - Only implement this animation for large screen size leaving the mobile expereience as it is 
*/

const Skills = () => {
    return ( 
        <StyledEngineProvider injectFirst>
            <Typography className="skillsHeader">
                My Skills 
            </Typography> 

            <Grid container spacing={1} mb={'clamp(6.25rem, 5rem + 6.25vw, 12.5rem)'}>
                <Grid item xs={12}>
                    <Box display={"flex"} flexDirection={{xs: 'column-reverse', lg: 'row'}} alignItems={{xs: "center", lg: 'flex-start '}}>
                        <Box display={"flex"} flexDirection={'column'} flexGrow={1} marginLeft={{xs: 0, lg: 'clamp(3.125rem, -5.208rem + 11.111vw, 8.125rem)'}} my={10} alignItems={{xs: 'center', lg: 'flex-start'}}>
                            <Typography className="languageTitle" >
                                Languages
                            </Typography>
                            <Box display={"flex"} gap={4} flexWrap={'wrap'} padding={5} justifyContent={{xs: 'center', lg: 'flex-start'}}>
                                <Chip
                                label="Python"
                                color="info"/>
                                <Chip
                                label="JavaScript"
                                color="info"/>
                                <Chip
                                label="HTML"
                                color="info"/>
                                <Chip
                                label="CSS"
                                color="info"/>
                                <Chip
                                label="C++"
                                color="info"/>
                            </Box>
                            <Typography className="languageTitle" mt={'clamp(1.563rem, 0.875rem + 3.438vw, 5rem)'}>
                                Frameworks / Tools
                            </Typography>
                            <Box display={"flex"} gap={4} padding={5} flexWrap={'wrap'} justifyContent={{xs: 'center', lg: 'flex-start'}}>
                                <Chip
                                label="React.js"
                                color="info"/>
                                <Chip
                                label="Git"
                                color="info"/>
                                <Chip
                                label="GitHub"
                                color="info"/>
                                <Chip
                                label="Material UI"
                                color="info"/>
                            </Box>
                        </Box>
                        <Box flexGrow={1} display={'flex'} justifyContent={"end"} alignItems={"end"} marginRight={{xs: 0, lg: 'clamp(3.125rem, -5.208rem + 11.111vw, 8.125rem)'}}>
                            <Skillstar />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Footer/>
            
        </StyledEngineProvider>
     );
}
 
export default Skills;