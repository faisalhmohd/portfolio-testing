import React from 'react';

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
};

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

export default NavMenuButton;
