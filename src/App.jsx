import React, { useState } from 'react';
import './App.css';

import NavBar from './NavBar';

function MainScreen({ children }) {
  return (
    <div className="minScrn">
      { children }
    </div>
  );
}

function Grid() {
  return (
    <div className="grd">
      <div />
      <div />
      <div />
    </div>
  );
}

function App() {
  const [ isMenuVisible, setMenuVisible ] = useState(false);
  return (
    <MainScreen>
      <Grid />
      <NavBar
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
    </MainScreen>
  );
}

export default App;
