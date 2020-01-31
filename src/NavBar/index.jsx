import React from 'react';

import './index.css';

const dotPositions = {
  row: {
    one: '-250%',
    two: '-50%',
    three: '150%'
  },
  column: {
    one: '-250%',
    two: '-50%',
    three: '150%'
  }
}

function NavMenu({ isMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      Nav Menu
    </div>
  );
}

function NavMenuButton({ isMenuVisible, setMenuVisible }) {
  return (
    <div className={`nv-NavMenuButton ${ isMenuVisible && 'visible' }`} onClick={() => setMenuVisible(!isMenuVisible)}>
      <span style={{ transform: `translate(${ dotPositions.column.one }, ${ dotPositions.row.one })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.two }, ${ dotPositions.row.one })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.three }, ${ dotPositions.row.one })` }}></span>

      <span style={{ transform: `translate(${ dotPositions.column.one }, ${ dotPositions.row.two })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.two }, ${ dotPositions.row.two })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.three }, ${ dotPositions.row.two })` }}></span>

      <span style={{ transform: `translate(${ dotPositions.column.one }, ${ dotPositions.row.three })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.two }, ${ dotPositions.row.three })` }}></span>
      <span style={{ transform: `translate(${ dotPositions.column.three }, ${ dotPositions.row.three })` }}></span>
    </div>
  );
}

function NavMenuItems({ isMenuVisible }) {
  return (
    <ul className={`nv-NavMenuItems ${ isMenuVisible && 'visible' }`}>
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

function NavBar({ isMenuVisible, setMenuVisible }) {
  return (
    <div className="nv-NavBar">
      <NavMenuItems isMenuVisible={isMenuVisible} />
      <NavMenuButton
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
      <NavMenu isMenuVisible={isMenuVisible} />
    </div>
  )
}

export default NavBar;
