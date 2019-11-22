import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OutlineButton from '../components/OutlineButton';

import Background from "../img/background.jpg"


export default function HomePage() {
  return (
    <div>
      <p>Winik Media</p>

      <div style={parallax}>
        <h1 style={parallax.title}>
          Winik Media
          <OutlineButton />
        </h1>

      </div>

      <div>
      Scroll Up and Down this page to see the parallax scrolling effect.
      </div>
    </div>
  )
}

const parallax = {
  margin: "0",
  padding: "0",
  backgroundImage: `url(${Background})`,
  minHeight: "550px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignText: "center",
  justifyContent: "center",
  title: {
    color: "white",
    position: 'absolute', left: '50%', top: '25%',
    transform: 'translate(-50%, -50%)',
    fontSize: "5em"
  }
};