import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
      <li style={{ fontWeight: 'bold', cursor: 'pointer', padding: '8px 0' }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'green' ,fontSize:"30px" }}>
    Home
  </Link>
</li>
<li style={{ fontWeight: 'bold', cursor: 'pointer', padding: '8px 0' }}>
  <Link to="/expenses" style={{ textDecoration: 'none', color: '#333',fontSize:"30px" }}>
    Add New Expense
  </Link>
</li>

  
      </ul>
    </nav>
  );
};

export default Navbar;
