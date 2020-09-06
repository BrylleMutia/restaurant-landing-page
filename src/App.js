import React from 'react';
import classes from './App.module.css';

import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className={classes.app}>
		  <Hero />
    </div>
  );
}

export default App;
