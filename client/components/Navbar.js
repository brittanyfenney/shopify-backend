import React from "react";
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <div>
    <h1>Image Repository</h1>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/images">Images</Link>
    </nav>
  </div>
)

