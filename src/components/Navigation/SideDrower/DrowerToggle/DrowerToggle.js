import React from 'react'
import classes from './DrowerToggle.css'

const DrowerToggle = (props) => (
    <div className={classes.DrowerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrowerToggle