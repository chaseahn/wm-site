import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Winik Media</h1>
      <p>
        <Link to="/about">about page</Link>
      </p>
    </div>
  )
}