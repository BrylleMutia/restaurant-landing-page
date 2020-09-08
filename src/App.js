import React from 'react';
import classes from './App.module.css';

import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div className={classes.app}>
		  <Hero />
      <Featured />
    </div>
  );
}

export default App;
