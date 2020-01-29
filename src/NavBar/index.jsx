import React from 'react';

import './index.css';

function NavMenu() {
  return (
    <div className="nv-NavMenu">
      <span style={{ top: '40%', left: '40%' }}></span>
      <span style={{ top: '40%', left: '50%' }}></span>
      <span style={{ top: '40%', left: '60%' }}></span>
      <span style={{ top: '50%', left: '40%' }}></span>
      <span style={{ top: '50%', left: '50%' }}></span>
      <span style={{ top: '50%', left: '60%' }}></span>
      <span style={{ top: '60%', left: '40%' }}></span>
      <span style={{ top: '60%', left: '50%' }}></span>
      <span style={{ top: '60%', left: '60%' }}></span>
    </div>
  );
}

function NavBar() {
  return (
    <div className="nv-NavBar">
      NavBar
      <NavMenu />
    </div>
  )
}

export default NavBar;
