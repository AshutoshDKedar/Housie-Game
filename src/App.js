import React from 'react';
import logo from './logo.svg';
import './App.css';

import HousieApp from './components/Housie/app';
import MatkaApp from './components/Matka/app';

function App() {
  return (
    <div className="container-fluid">
		{/*<HousieApp />*/}
      <MatkaApp />
    </div>
  );
}

export default App;
