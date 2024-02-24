import '../App.css';
import logo from '../assets/logo.png'
import { Drawer, Grid, IconButton, Box, List, ListItem, ListItemButton, ListItemText, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClick = () => {
        if (window.location.pathname === '/'){
            document.getElementById('about').scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
                handleClose();
        } else {
            window.location.href = '/';
            handleClose();
        }
    }

    return ( 
        <div>
            <StyledEngineProvider injectFirst>
                <Grid container spacing={1} sx={{marginTop: '5px'}} >
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3} md={2} >
                        <img src={logo} alt="logo" className='logo' />
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
                            onClose={handleClose}
                            sx={{display: {xs: 'block', md: 'none'}, position: 'sticky'}}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton component={RouterLink} reloadDocument to="/">
                                        <ListItemText primary='Home'/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={handleClick}>
                                        <ListItemText primary='About Me'/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={RouterLink} reloadDocument to="/skills">
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
                        
                        <Router>
                            <Box sx={{display: {xs: 'none', md: 'flex'}, marginTop: '25px'}} justifyContent={'space-between'} >
                                <Link component={RouterLink} reloadDocument underline='none' to="/">
                                <Typography variant='h5'>
                                    Home
                                </Typography>
                                </Link>
                                <div onClick={() => {
                                    if (window.location.pathname === '/'){
                                        document.getElementById('about').scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                            });
                                    } else {
                                        window.location.href = '/';
                                    }

                                }} style={{cursor: 'pointer'}}>
                                    <Typography variant='h5'>
                                        About Me
                                    </Typography>
                                </div>
                                
                                <Link component={RouterLink} reloadDocument underline='none' to="/skills">
                                <Typography variant='h5'>
                                    Skills
                                </Typography>
                                </Link>
                                <Link component={RouterLink} underline='none' to="/projects">
                                <Typography variant='h5'>
                                    Projects
                                </Typography>
                                </Link>
                                <Link component={RouterLink} underline='none' to="/contact">
                                <Typography variant='h5'>
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