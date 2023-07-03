import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Projects', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Logo = styled(Typography)`
  margin-right: ${(props) => props.theme.spacing(2)};
  display: block; /* Change to block */
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
`;

const NavLinkButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(1)} 0;
  margin-right: 0.3rem;
  color: black;
  display: block;
  &:hover {
    background-color: #E5CB9F;
  }
`;

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const matchMedia = window.matchMedia('(max-width: 798px)');
      setIsMobile(matchMedia.matches);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%', marginBottom: "15rem" }}>
      <Container disableGutters>
        <Toolbar sx={{ flexGrow: 2, padding: 0 }}>
          <Logo variant="h6" noWrap component="a" href="/">
            {isMobile ? (
              <>
                Shawaz <br /> {'<Dev />'} 
              </>
            ) : (
              <>
                Shawaz Imam <br /> {'<Fullstack_Developer />'}
              </>
            )}
          </Logo>

          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>  
              {pages.map((page) => (
                <Link key={page} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} style={{ textDecoration: "none"}}>
                  <NavLinkButton>
                    {page}
                  </NavLinkButton>
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Shawaz" src="./src/assets/halo.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;