import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import 'typeface-roboto'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Home from './pages/Home/Home.jsx'
import Error404 from './pages/Error404/Error404.jsx'
import NavFoot from './components/NavFoot'



const theme = createTheme({
  palette: {
     primary: {
        main: "#68A7AD",
        light: '#E5CB9F', 
               },
     secondary: {
        main: "#99C4C8",
        light: "#EEE4AB",
                },
      text: {
        secondary: "white",
      },
           },
fontFamily: 'Roboto, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <NavFoot>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </NavFoot>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
