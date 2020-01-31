import React from 'react';

function NavMenu({ isMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      Nav bar
    </div>
  );
}

export default NavMenu;
