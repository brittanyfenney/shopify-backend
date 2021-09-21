import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Image Repository</h1>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
  </div>
)

export default Navbar
