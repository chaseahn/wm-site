import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
          <h3 style={styles.parallax.subtitle}>
            The Past, Present, & Future of Sports
          </h3>
        </h1>
        <Grid container 
          direction="row"
          justify="center"
          alignItems="center"
          style={{position: "absolute", top: '35%', width: "100%", padding: "30px"}}>
          <OutlineButton text="About Us" />
          <OutlineButton text="Our Work" />
          <OutlineButton text="Contact Us" />
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
    minHeight: "450px",
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
      margin: "0",
    },
    subtitle: {
      color: "white",
      margin: "0",
      float: "center",
      textAlign: "center",
      width: "100%"
    },
    span: {
      color: "blue"
    }
  }
};

