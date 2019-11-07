
import React from 'react';

import classes from './Input.css';
const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input className={classes.InputElement} {...props.elementConfig}  value=""/>;
            break;
        case 'textarea':
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value=""/>;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value=""/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;