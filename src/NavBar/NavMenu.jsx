import React from 'react';

function NavMenu({ isMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
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
    </div>
  );
}

export default NavMenu;
