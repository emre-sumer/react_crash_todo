import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ()=>(
    <header>
    <h1>TodoList</h1>
    <Link to="/">Home</Link> |
    <Link to="/about">About</Link>
</header>
);


export default Header;
