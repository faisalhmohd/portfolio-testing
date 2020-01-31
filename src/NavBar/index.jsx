import React from 'react';

import NavItems from './NavItems';
import NavMenuButton from './NavMenuButton';
import NavMenu from './NavMenu';

import './index.css';

function NavBar({ isMenuVisible, setMenuVisible }) {
  return (
    <div className="nv-NavBar">
      <NavItems isMenuVisible={isMenuVisible} />
      <NavMenuButton
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
      <NavMenu isMenuVisible={isMenuVisible} />
    </div>
  )
}

export default NavBar;
