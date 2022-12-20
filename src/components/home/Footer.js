import React from 'react';
import { Grid, Container, Button, Box, Link, Typography } from '@mui/material';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FooterImage from '../../images/footer.png';
import Mail from '../../images/mail.png';
import Location from '../../images/location.png';
import Facebook from '../../images/facebook.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Instagram from '../../images/insta.png';
import IconButton from '@mui/material/IconButton';
import './Home.css';

const Footer = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="black" color="white">
      <Container maxWidth="lg" >
        <Grid container spacing={8} borderBottom={1} >
        
          <Grid item xs={12} sm={4} >

            <Box sx={{ flexGrow: 0, paddingBottom: "6%", display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <Avatar alt="Animal Shelter" src={FooterImage} />
              ANIMAL SHELTER
            </Box>

            <Box borderBottem={1} sx={{ textAlign: "start", color: "grey" }}>
              One of the best animal shelter places in India.
              We're recognized by the government. Please take
              a pledge to take care of those lovely pets !
            </Box>

            <Box borderBottem={1} sx={{ textAlign: "start", paddingTop: "2rem" }}>
              <Button type="submit" style={{ color: "white",textTransform:"none", backgroundColor: "#FF6584", borderRadius: "5px", width: "6rem" }} fullWidth> <Link to href="/Adoptpet" color="inherit" rel="noreferrer" underline="none"> Adopt &rarr;</Link></Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottem={1} sx={{ paddingBottom: "6%", textAlign: "start" }}>
              GET IN TOUCH
            </Box>

            <Box sx={{ textAlign: "start",color: "grey", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img alt="Animal Shelter" src={Location} style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              Ilesfnee cnu efoin eoifn oewifnewo inf sdc
              csdcneno ie woiwemfwokm fwe
              w ecen cloenwo we - 355233
            </Box>

            <Box sx={{ textAlign: "start",color: "grey", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img alt="Animal Shelter" src={Mail} style={{ width: "2rem", height: "1.5rem", paddingRight: "1rem" }} />
              cisubdcusb@gmail.com
            </Box>

            <Box borderBottem={1} sx={{ paddingBottom: "4%", textAlign: "start" }}>
              FOLLOW US
            </Box>

            <Box xs display="flex" sx={{paddingBottom: "2rem", color: "#D1D5DB"}} >
            <IconButton onClick={event => window.location.href = `https://twitter.com/`} sx={{color: "inherit"}}>
              <TwitterIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://www.facebook.com/`} style={{ color: "grey"}} >
              <Avatar alt="Facebook" src={Facebook} style={{ width: "2rem", color: "grey", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://in.linkedin.com/`} sx={{color: "inherit"}} >
              <LinkedInIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottem={1} sx={{ textAlign: "start", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              QUICK LINKS
            </Box>
            <Box sx={{ textAlign: "start",color: "grey", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <Link href="/" color="inherit" style={{textDecoration:"none"}}>
                Home
              </Link>
            </Box>
            <Box sx={{ textAlign: "start",color: "grey", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <Link href="/Contact" color="inherit" style={{textDecoration:"none"}}>
                Contact Us
              </Link>
            </Box>
          </Grid>
         </Grid>

         
          <Grid item xs={12} sm={12} >
            <Box sx={{ color: "grey", textAlign: "start" , paddingTop: "1rem"}}>
              Copyright &copy; {new Date().getFullYear()}. Animal Shelter
              <Box sx={{color: "#D1D5DB", textAlign: "end" }} >
              <Link href="/" color="inherit">
                Privacy Policy
              </Link>
              <Link href="/" color="inherit" sx={{paddingLeft: "1rem"}}>
                Terms of Service
              </Link>
              <Link href="/" color="inherit" sx={{paddingLeft: "1rem"}}>
                Cookies Settings
              </Link>
            </Box>
           
            </Box>
            {/* <Box sx={{color: "grey", textAlign: "end" }} >
              <Link href="/" color="inherit">
                Privacy Policy
              </Link>
              <Link href="/" color="inherit" sx={{paddingLeft: "1rem"}}>
                Terms of Service
              </Link>
              <Link href="/" color="inherit" sx={{paddingLeft: "1rem"}}>
                Cookies Settings
              </Link>
            </Box> */}
          </Grid> 
                
      </Container>
    </Box>
  )
}

export default Footer