import React, { useState } from "react";
import Mail from '../images/mail.png';
import Location from '../images/location.png';
import Facebook from '../images/facebook.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';

const Contact = () => {
  const [show, setShow] = useState(true);

  return (
    <Grid sx={{ bgcolor: "white" }}>
      <Card style={{ backgroundColor: "#EBF9FF", maxWidth: 580, padding: "20px 5px", margin: "0 auto" }}>

        <CardContent>
          <IconButton
            sx={{ position: "absolute", maxWidth: "580", marginLeft: "30rem", display: { xs: 'none', md: 'block' } }}
            onClick={() => setShow(false)}
          >
            <NavLink to="/"><CloseIcon /></NavLink>
          </IconButton>
          <IconButton
            sx={{ position: "absolute", maxWidth: "580", marginLeft: "20rem", display: { xs: 'block', md: 'none' }  }}
            onClick={() => setShow(false)}
          >
            <NavLink to="/"><CloseIcon /></NavLink>
          </IconButton>

          <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h4" align="start">
            Animal Shelter
          </Typography>

          <Box borderBottem={1} sx={{ paddingBottom: "4%", textAlign: "start" }}>
            GET IN TOUCH
          </Box>

          <Grid item xs={12} sm={4} >
            <Box sx={{ textAlign: "start", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img alt="Animal Shelter" src={Location} style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              Ilesfnee cnu efoin eoifn oewifnewo inf sdc
              csdcneno ie woiwemfwokm fwe
              w ecen cloenwo we - 355233
            </Box>

            <Box sx={{ textAlign: "start", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img alt="Animal Shelter" src={Mail} style={{ width: "2rem", height: "1.5rem", paddingRight: "1rem" }} />
              cisubdcusb@gmail.com
            </Box>

            <Box borderBottem={1} sx={{ paddingBottom: "4%", textAlign: "start" }}>
              FOLLOW US
            </Box>

            <Box xs display="flex" >
              <IconButton onClick={event => window.location.href = `https://twitter.com/`} sx={{ color: "inherit" }}>
                <TwitterIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://www.facebook.com/`} >
                <img alt="Facebook" src={Facebook} style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://in.linkedin.com/`} sx={{ color: "inherit" }} >
                <LinkedInIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
            </Box>
          </Grid>

        </CardContent>
      </Card>
    </Grid>
  );
};
export default Contact;