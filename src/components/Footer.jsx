import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import '../index.css';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));


const LeftContent = styled(Box)(({ theme }) => ({
  flex: '0 1 auto',
}));

const RightContent = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  flex: '0 1 auto',
});

const Address = styled(Box)(() => ({
  display: 'flex',
  gap: '0.7rem',
}));



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      <LeftContent>
        <Typography variant="body2" align="left" color="textSecondary">
          &copy; {currentYear} Shawaz Imam
        </Typography>
      </LeftContent>
      <RightContent>
        <Address>
          <a href="https://www.linkedin.com/in/shawazai/" target="_blank">
            <img
              alt="LinkedIn"
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
              height="25px"
            />
          </a>
          <a href="mailto:shawazisonfire@gmail.com" target="_blank">
            <img
              alt="Gmail"
              src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"
              height="25px"
            />
          </a>
          <a href="https://discord.com/users/623026537586753567" target="_blank">
            <img
              alt="Discord"
              src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge"
              height="25px"
            />
          </a>
        </Address>
      </RightContent>
    </FooterContainer>
  );
};

export default Footer;
