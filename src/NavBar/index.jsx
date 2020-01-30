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

function NavMenu({ isMenuVisible, setMenuVisible }) {
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`} onClick={() => setMenuVisible(!isMenuVisible)}>
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

function NavBar({ isMenuVisible, setMenuVisible }) {
  return (
    <div className="nv-NavBar">
      NavBar
      <NavMenu
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
    </div>
  )
}

export default NavBar;
