import React from 'react';
import { Grid, Container, Box, Link, Typography, Button } from '@mui/material';
import Adoptpetimage from '../../images/welcome.jpg';
import Givepetimage from '../../images/give.jpg';
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} sx={{ bgcolor: "#EBF9FF" }} color="black">
        <Container maxWidth="lg">
          <Grid container >
            <Grid item xs={12} sm={6} >

              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'Arial',
                  fontWeight: 540,
                  color: 'black',
                  textDecoration: 'none',
                }}>
                Welcome to the Animal Shelter !
              </Typography>

              <Box borderBottem={1} sx={{ textAlign: "start", marginTop: "1rem" }}>
                Glad that you care for the animals so much. We make sure that
                you'll not repent your decision of adopting your favorite pet !!
              </Box>

              <Box sx={{ textAlign: "start", marginTop: "1rem", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'flex' }, mr: 1 }} >
                <Grid item xs={12}>
                  <Button type="submit"  style={{ color: "white",textTransform:"none", backgroundColor: "#FF6584", borderRadius: "5px", width: "8rem" }} fullWidth> <Link to href="/Adoptpet" color="inherit" rel="noreferrer" underline="none"> Adopt</Link></Button>

                  <Button type="submit" style={{ color: "black",textTransform:"none", backgroundColor: "inherit", border: "1px solid black", borderRadius: "5px", width: "16rem", marginLeft: "1rem" }} fullWidth> <Link to href="/Petswehave" color="inherit" rel="noreferrer" underline="none"> What all pets do we have ?</Link></Button>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ flexGrow: 0, paddingBottom: "6%", display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
                <img alt="Animal Shelter" src={Adoptpetimage} style={{ width: "15rem", height: "6rem", paddingRight: "1rem" }} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box borderBottem={1} sx={{ textAlign: "end" }}>
                <h3 style={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'Arial',
                  fontWeight: 540,
                  color: 'black',
                  paddingBottom: '1rem',
                }}>
                  We do take in pets if you can't take care of them !
                </h3>
                Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
              </Box>

              <Box sx={{ textAlign: "start", paddingLeft: "20rem", paddingBottom: "6%", flexGrow: 0, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Grid item xs={12}>
                  <Button type="submit" style={{ color: "inherit",textTransform:"none", border: "solid black 1px", borderRadius: "5px", width: "8rem" }} fullWidth> <Link to href="/Givepet" color="inherit" rel="noreferrer" underline="none"> Give Away</Link></Button>
                </Grid>
              </Box>

              <Box sx={{ paddingBottom: "3rem", paddingLeft: "64rem", paddingTop: "1.5rem", flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                <Grid item xs={12}>
                  <Button type="submit" style={{ color: "inherit" ,textTransform:"none", border: "solid black 1px", borderRadius: "5px", width: "8rem" }} fullWidth> <Link to href="/Givepet" color="inherit" rel="noreferrer" underline="none"> Give Away</Link></Button>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} >
              <Box sx={{ textAlign: "start", flexGrow: 0, paddingBottom: "6%", display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
                <img alt="Animal Shelter" src={Givepetimage} style={{ width: "15rem", height: "10rem", paddingRight: "1rem" }} />
                Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home