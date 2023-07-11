import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NavFoot = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ marginTop: "10rem"}}>
        {children}
      </main>
      <Footer style={{ marginBottom: "10rem"}} />
    </div>
  )
}

export default NavFoot