import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

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

const ResponsiveLogo = styled(Typography)`
  margin-right: ${(props) => props.theme.spacing(2)};
  display: flex;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none; /* Change to none */
  }
  flex-grow: 1;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
`;

const NavLinkButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(2)} 0;
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

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar position="static" sx={{ width: '100%' }}>
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
            <Box sx={{ display: 'flex' }}> {/* Remove the `xs` and `md` properties */}
              {pages.map((page) => (
                <NavLinkButton key={page} onClick={handleCloseNavMenu}>
                  {page}
                </NavLinkButton>
              ))}
            </Box>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Shawaz" src="/src/assets/halo.jpg" />
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

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
