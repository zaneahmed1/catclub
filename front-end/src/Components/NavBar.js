import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/cats">See Cats</Link>
      </h1>
      <button>
        <Link to="/cats/new">Add A Cat</Link>
      </button>
    </nav>
  )
}
