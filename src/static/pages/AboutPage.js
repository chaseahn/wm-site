import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>
        <Link to="/">home page</Link>
      </p>
    </div>
  )
}