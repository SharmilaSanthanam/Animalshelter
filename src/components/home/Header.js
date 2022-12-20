import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../../images/logo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Instagram from '../../images/insta.png';
import { NavLink } from 'react-router-dom';
// import InstagramIcon from '@mui/icons-material/Instagram';

const pages = ['Home', 'Contact Us'];
// const settings = [{LinkedInIcon}, 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#EBF9FF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}


          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Avatar alt="Animal Shelter" src={Logo} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ANIMAL SHELTER
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, mr: 1 }}>

            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
            <Avatar alt="Animal Shelter" src={Logo} />
            {/* </IconButton> */}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ANIMAL SHELTER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box>

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"

                  sx={{

                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Arial',
                    fontWeight: 200,
                    color: 'grey',
                    textAlign: "center",
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Typography>

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/Contact"
                  sx={{

                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Arial',
                    fontWeight: 200,
                    color: 'grey',
                    textAlign: "center",
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>

                </MenuItem>

              ))} */}
              <Box xs display="flex" justifyContent="center" alignItems="center">
                <IconButton onClick={event => window.location.href = `https://in.linkedin.com/`} sx={{ p: 0 }}>
                  <LinkedInIcon sx={{ color: 'black' }} />
                </IconButton>
                <IconButton onClick={event => window.location.href = `https://twitter.com/`} sx={{ p: 0 }}>
                  <TwitterIcon sx={{ color: 'black' }} />
                </IconButton>
                <IconButton onClick={event => window.location.href = `https://www.instagram.com/`} sx={{ p: 0 }}>
                  <Avatar alt="Instagram" src={Instagram} sx={{ color: 'black' }} />
                </IconButton>
              </Box>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href="/" variant="h6" style={{
paddingLeft: "20rem",
             
              fontFamily: 'Arial',
              fontWeight: 200,
              color: 'black',
              textAlign: "center",
              textDecorationColor: "black",

            }}>
              Home
            </Link>
            {/* <NavLink to='/' activeClassName="active" activeStyle={{color: "black"}}
              variant="h5"
              style={{

                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'Arial',
                fontSize: '1.5rem',
                fontWeight: 200,
                color: 'black',
                textAlign: "center",   
              }}>Home</NavLink> */}
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'Arial',
                fontWeight: 300,
                color: 'grey',
                textDecoration: 'none',
              }}
            >
              Home
            </Typography> */}
 <Link href="/Contact" variant="h6" style={{
 
paddingLeft: "1rem",
fontFamily: 'Arial',
fontWeight: 200,
color: 'grey',
textDecorationLine: "none",

}}>
Contact Us
</Link>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Contact"
              sx={{
                mr: "20rem",
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'Arial',
                fontWeight: 300,
                color: 'grey',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </Typography> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={event => window.location.href = `https://in.linkedin.com/`} sx={{ p: 0 }}>
              <LinkedInIcon sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={event => window.location.href = `https://twitter.com/`} sx={{ p: 0 }}>
              <TwitterIcon sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={event => window.location.href = `https://www.instagram.com/`} sx={{ p: 0 }}>
              <Avatar alt="Instagram" src={Instagram} sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;