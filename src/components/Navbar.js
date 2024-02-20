import '../App.css';
import logo from '../assets/logo.png'
import { Drawer, Grid, IconButton, Box, List, ListItem, ListItemButton, ListItemText, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <div>
            <StyledEngineProvider injectFirst >
                <Grid container spacing={1} sx={{marginTop: '5px'}} className='nav'>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <img src={logo} alt="logo" className='logo'/>
                    </Grid>
                    <Grid item xs={7} >
                        <Box justifyContent={'flex-end'} sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton onClick={() => setOpen(prev => !prev)}>
                            <MenuIcon fontSize='large' sx={{color: 'white'}}/>
                        </IconButton>
                        </Box>
                        <Router>
                        <Drawer
                        anchor='top'
                        open={open}
                        onClose={() => setOpen(prev => !prev)}
                        sx={{display: {xs: 'block', md: 'none'}}}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton component={RouterLink} to="/">
                                    <ListItemText primary='Home'/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={RouterLink} to="/aboutme" >
                                    <ListItemText primary='About Me'/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={RouterLink} to="/skills">
                                    <ListItemText primary='Skills'/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={RouterLink} to="/projects">
                                    <ListItemText primary='Projects'/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={RouterLink} to="/contact">
                                    <ListItemText primary='Contact'/>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Drawer>
                        </Router>
                
                        <Router >
                        <Box sx={{display: {xs: 'none', md: 'flex'}, marginTop: '25px'}} justifyContent={'space-evenly'}>
                            <Link component={RouterLink} underline='none' to="/">
                            <Typography variant='h6'>
                                Home
                            </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/aboutme">
                            <Typography variant='h6'>
                                About Me
                            </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/skills">
                            <Typography variant='h6'>
                                Skills
                            </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/projects">
                            <Typography variant='h6'>
                                Projects
                            </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/contact">
                            <Typography variant='h6'>
                                Contact
                            </Typography>
                            </Link>
                        </Box>
                        
                        </Router>
                        
                        
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </StyledEngineProvider>
        </div>
     );
}
 
export default Navbar;