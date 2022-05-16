import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
    <div id="tooplate_header">
        <div id="site_title">
            <h1>Bloggy the Froggy</h1>
        </div>
    </div>
   <hr/>
            <NavLink to="/">Blog List</NavLink> | {' '}
    <div id="users" className="tooplate_menu"></div>
    <div id="posts" className="tooplate_menu"></div>
    </header>
    )
}