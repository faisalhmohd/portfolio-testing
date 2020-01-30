import React from 'react';

function NavMenu({ isMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      <ul className="nv-NavMenu-items">
        <li>
          Helias
        </li>
        <li>
          Hoboken Yogi
        </li>
        <li>
          Buzzworthy
        </li>
        <li>
          Gatto
        </li>
        <li>
          Snooze
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
