import React from "react";
import { Link } from "react-router-dom";

import './styles.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">
           <h3>Purple World's</h3> 
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/">Post</Link>
        <Link className="nav-link" to="/contato">Contato</Link>
        <Link className="nav-link" to="/cultura">Cultura</Link>
      </div>
    </nav>
  );
}
