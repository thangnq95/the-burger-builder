import React from 'react';

import classes  from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <p>{props.label}</p>
        <button 
        className={classes.Less} 
        disabled={props.disabled} 
        onClick={props.removed}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;