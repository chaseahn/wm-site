import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Background from "../img/background.jpg"

export default function HomePage() {
  return (
    <div>
      <p>Winik Media</p>

      <div style={parallax}>
      </div>

      <div>
      Scroll Up and Down this page to see the parallax scrolling effect.
      This div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>
    </div>
  )
}

const parallax = {
  backgroundImage: `url(${Background})`,
  minHeight: "500px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};