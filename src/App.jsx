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

function App() {
  const [ isMenuVisible, setMenuVisible ] = useState(false);
  return (
    <MainScreen>
      <NavBar
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
    </MainScreen>
  );
}

export default App;
