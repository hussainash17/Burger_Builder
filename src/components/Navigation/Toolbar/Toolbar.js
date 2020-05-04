import React from 'react'

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrowerToggle from '../SideDrower/DrowerToggle/DrowerToggle'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrowerToggle clicked={props.drowerToggleClicked}></DrowerToggle>
        <div className={classes.Logo}>
            <Logo></Logo>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar