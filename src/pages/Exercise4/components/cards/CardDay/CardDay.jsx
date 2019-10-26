import React from 'react';
import classes from './CardDay.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faThermometerHalf
} from '@fortawesome/free-solid-svg-icons'

const CardDay = props => (
    <div className={classes.container}>
        <div className={classes.date}>
            <span className={classes.dayText}>{props.day}</span>
            <span className={classes.dateText}>{props.date}</span>
        </div>
        <div>
            <span className={classes.icon}>{props.icon}</span>            
            <span className={classes.weatherText}>{props.weather}</span>
        </div>
        <div className={classes.termometerContainer}>
            <div className={classes.termometerLine}>
                <FontAwesomeIcon className={classes.termometerIcon} icon={faThermometerHalf} />
                <span className={classes.termometerIcon}>Min. {props.min}°</span>
            </div>
            <div className={classes.termometerLine}>
                <FontAwesomeIcon className={classes.termometerIcon} icon={faThermometerHalf} />
                <span className={classes.termometerIcon}>Max. {props.max}°</span>
            </div>
        </div>
    </div>
);


export default CardDay;