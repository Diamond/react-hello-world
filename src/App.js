import React from 'react';
import './App.css';

import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Jim"/>
      <HelloWorld name="Sally"/>
    </div>
  );
};

export default App;
