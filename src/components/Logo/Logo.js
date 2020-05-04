import React from 'react'

import logo from '../../assets/images/original.png'
import classes from './Logo.css'

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logo} alt="MyBurger"></img>
    </div>
)

export default Logo