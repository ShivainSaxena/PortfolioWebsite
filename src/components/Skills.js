import Footer from "./Footer";
import { Grid, Typography, Box } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import '../App.css';
import Skillstar from "../animations/Skillstar";


const Skills = () => {
    return ( 
        <StyledEngineProvider injectFirst>
            <Box display={"flex"} justifyContent={"center"}>
               <Typography className="skillsHeader">
                    My Skills 
                </Typography> 
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <Box display={"flex"} flexDirection={{xs: 'column-reverse', lg: 'row'}} alignItems={{xs: "center", lg: 'flex-start '}}>
                        <Box flexGrow={1}>
                            <Typography>
                                Languages
                            </Typography>
                        </Box>
                        <Box flexGrow={1} display={'flex'} justifyContent={"end"} alignItems={"end"} marginRight={10}>
                            <Skillstar />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            
        </StyledEngineProvider>
     );
}
 
export default Skills;