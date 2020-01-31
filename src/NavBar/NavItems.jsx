import React from 'react';

function NavItems({ isMenuVisible }) {
  return (
    <ul className={`nv-NavItems ${ isMenuVisible && 'visible' }`}>
      <li>
        <a className="active">About</a>
      </li>
      <li>
        <a>Work</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  );
}

export default NavItems;
