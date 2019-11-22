import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import Components
import OutlineButton from '../components/OutlineButton';

import Background from "../img/background.jpg"


export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <p>
        Winik Media Logo
      </p>

      {/* Parallax Banner */}
      <div style={styles.parallax}>
        <h1 style={styles.parallax.title}>
          Winik <span style={styles.parallax.span}>Media</span>
        </h1>
        <Grid container 
          direction="row"
          justify="center"
          alignItems="center"
          style={{position: "absolute", top: '35%'}}>
          <OutlineButton text="About" />
          <OutlineButton text="Work" />
          <OutlineButton text="Contact" />
        </Grid>
      </div>
      <div>
      Scroll Up and Down this page to see the parallax scrolling effect.
      </div>
    </div>
  )
}

const styles = {
  parallax: {
    width: "100%",
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
      margin: "auto"
    },
    span: {
      color: "blue"
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    }
  },
}));