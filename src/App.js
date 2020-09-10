import React from 'react';
import classes from './App.module.css';

import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Download from "./components/download/Download";
import Grid from "./components/grid/Grid";

function App() {
  return (
    <div className={classes.app}>
		  <Hero />
      <Featured />
      <Download />
      <Grid />
    </div>
  );
}

export default App;
