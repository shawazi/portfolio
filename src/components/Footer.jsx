import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import '../index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className="footer" component="footer">
      <Container maxWidth="lg">
        <div className="left-content">
          <Typography variant="body2" align="left" color="textSecondary">
            &copy; {currentYear} Shawaz Imam
          </Typography>
        </div>
        <div className="right-content">
          <address className="box-4">
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
          </address>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
