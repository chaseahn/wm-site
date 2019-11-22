import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

// Import Components
import OutlineButton from '../components/OutlineButton';

import Background from "../img/background.jpg"


export default function HomePage() {
  return (
    <div>
      <p>
        Winik Media Logo
      </p>

      {/* Parallax Banner */}
      <div style={styles.parallax}>
        <h1 style={styles.parallax.title}>
          Winik <span style={styles.parallax.span}>Media</span>
          <Grid container style={styles.buttonContainer} maxWidth="sm">
            <Grid item>
              <OutlineButton text="About" />
            </Grid>
            <Grid item>
              <OutlineButton text="Work" />
            </Grid>
            <Grid item>
              <OutlineButton text="Contact" />
            </Grid>
          </Grid>
        </h1>
      </div>

      <div>
      Scroll Up and Down this page to see the parallax scrolling effect.
      </div>
    </div>
  )
}

const styles = {
  parallax: {
    margin: "0",
    padding: "0",
    backgroundImage: `url(${Background})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignText: "center",
    justifyContent: "center",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.6)",
    title: {
      color: "white",
      position: 'absolute', left: '50%', top: '25%',
      transform: 'translate(-50%, -50%)',
      fontSize: "4em",
      maring: "auto"
    },
    span: {
      color: "blue"
    }
  },
  buttonContainer: {
    padding: "0",
    alignText: "center",
    justifyContent: "center",
  }
};