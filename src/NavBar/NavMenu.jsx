import React from 'react';

function MenuItems() {
  return (
    <ul className="nv-NavMenu-items">
      <li>
        <a>
          Helias
        </a>
      </li>
      <br />
      <li>
        <a>
          Hoboken Yogi
        </a>
      </li>
      <br />
      <li>
        <a>
          Buzzworthy
        </a>
      </li>
      <br />
      <li>
        <a>
          Gatto
        </a>
      </li>
      <br />
      <li>
        <a>
          Snooze
        </a>
      </li>
    </ul>
  );
}

function NavMenu({ isMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      <MenuItems />
    </div>
  );
}

export default NavMenu;
