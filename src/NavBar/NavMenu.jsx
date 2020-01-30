import React from 'react';

function MenuItems() {
  const items = [
    'Helias',
    'Hoboken Yogi',
    'Buzzworthy',
    'Gatto',
    'Snooze'
  ];

  return (
    <ul className="nv-NavMenu-items">
      {items.map(item => (
        <React.Fragment>
          <li>
            <a>{ item }</a>
          </li>
          <br />
        </React.Fragment>
      ))}
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
