// import "./contact.css";
import Mail from '../images/mail.png';
import Location from '../images/location.png';
import Facebook from '../images/facebook.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import { useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'; 
import { Box, Grid, NativeSelect, TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
// import { Container, Row, Col } from 'react-bootstrap';
// import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_thylbsn",
  //       "template_j6fzmyh",
  //       formRef.current,
  //       "w2BwBw01fItpwRBvP"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true)
          
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //     e.target.reset();
  // };

  return (
    <Grid sx={{ bgcolor: "white" }}>
    <Card style={{ backgroundColor: "#EBF9FF", maxWidth: 580, padding: "20px 5px", margin: "0 auto" }}>
  
      <CardContent>
      <IconButton
        style={{ position: "absolute",  maxWidth: "580", marginLeft: "15rem" }}
        onClick={() => setShow(false)}
      >
        <NavLink to="/"><CloseIcon /></NavLink>
        {/* <CloseIcon /> */}
      </IconButton>
        <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h4" align="start">
          Animal Shelter
        </Typography>

      {/* <h2>Let's Connect...</h2> */}
      <Box borderBottem={1} sx={{paddingBottom: "4%", textAlign: "start"}}>
              GET IN TOUCH
            </Box>
      <Grid item xs={12} sm={4} >
                      
            <Box sx={{ textAlign: "start", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
            <img alt="Animal Shelter" src={Location} style={{width: "2rem", height: "2rem", paddingRight: "1rem"}}/>
              Ilesfnee cnu efoin eoifn oewifnewo inf sdc
              csdcneno ie woiwemfwokm fwe
              w ecen cloenwo we - 355233
                      
            </Box>

            <Box sx={{ textAlign: "start", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
            <img alt="Animal Shelter" src={Mail} style={{width: "2rem", height: "1.5rem", paddingRight: "1rem" }}/>
            cisubdcusb@gmail.com
               
              
            </Box>

            <Box borderBottem={1} sx={{paddingBottom: "4%", textAlign: "start"}}>
              FOLLOW US
            </Box>
            <Box xs display="flex" >
            <IconButton onClick={event => window.location.href = `https://twitter.com/`} sx={{color: "inherit"}}>
              <TwitterIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://www.facebook.com/`} >
              <img alt="Facebook" src={Facebook} style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
              <IconButton onClick={event => window.location.href = `https://in.linkedin.com/`} sx={{color: "inherit"}} >
              <LinkedInIcon style={{ width: "2rem", height: "2rem", paddingRight: "1rem" }} />
              </IconButton>
            </Box>
           
          </Grid>
            
          {/* <p className="c-desc">
            <b> Get in touch...</b>     
          </p> */}
          {/* <form className="connect" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" /><br></br>
            <input  type="text" placeholder="Subject" name="user_subject" /><br></br>
            <input  type="text" placeholder="Email" name="user_email" /><br></br><br></br>
            <textarea rows="5" placeholder="Message" name="message" /><br></br>
            <button type="submit" className="submit">Submit</button>
            {done && "Thank you..."}
          </form> */}
     </CardContent>
</Card>
</Grid>
         
   
  );
};
export default Contact;