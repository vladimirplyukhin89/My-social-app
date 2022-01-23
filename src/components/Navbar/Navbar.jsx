import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {

    // для выбранной ссылки
    const selectedLink = () => {
        return selected => selected.isActive ? classes.active : classes.item;
    }

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={selectedLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={selectedLink()}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={selectedLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={selectedLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={selectedLink()}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;