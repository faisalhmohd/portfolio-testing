import React from 'react';
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
  return (
    <MainScreen>
      <NavBar />
    </MainScreen>
  );
}

export default App;
