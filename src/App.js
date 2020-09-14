import React from 'react';
import classes from './App.module.css';

import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Download from "./components/download/Download";
import Grid from "./components/grid/Grid";
import Affiliates from "./components/affiliates/Affiliates";
import CallToAction from './components/callToAction/CallToAction';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={classes.app}>
		  <Hero />
      <Featured />
      <Download />
      <Grid />
      <Affiliates />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
