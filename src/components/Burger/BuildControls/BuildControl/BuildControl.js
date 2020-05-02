import React from 'react'

import clases from './BuildControl.css'


const BuildControl = (props) => (
    <div className={clases.BuildControl}>
        <div className={clases.Label}>
            {props.label}
        </div>
        <button
            className={clases.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button
            className={clases.More}
            onClick={props.added}>More</button>
    </div>
)

export default BuildControl