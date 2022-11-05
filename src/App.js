import React from 'react';

import Carosuel from './components/Carosuel';
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carosuel/>
      <Login/>
      
    </div>
  );
}

export default App;
