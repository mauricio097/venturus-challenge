import React from 'react';
import classes from './CardFooter.module.scss';

const CardFooter = props => (
    <div className={classes.container}>
        <span className={classes.icon}>
            {props.icon} %
        </span>
        <span className={classes.variable}>{props.variable}</span>
        <span className={classes.unity}>{props.unity}</span>
    </div>
);

export default CardFooter;