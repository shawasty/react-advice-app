import { NavLink } from 'react-router-dom';


import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Advice</h1>
            <ul>
                <NavLink to ='/'>
                <li>Home</li>
                </NavLink>

                <NavLink to = '/random'>
                <li>Random Advice</li>
                </NavLink>

                <NavLink to = '/search'>
                <li>Search</li>
                </NavLink>

                <NavLink to = '/about'>
                <li>About us</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;