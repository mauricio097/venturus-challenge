import React from 'react';
import classes from './CardDetails.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, 
        faThermometerQuarter, 
        faThermometerFull, 
        faThermometerHalf,
        faCloud
} from '@fortawesome/free-solid-svg-icons'


const CardDetails = () => (
    <div className={classes.container}>
        <div className={classes.titleContainer}>
            <div className={classes.titleText}>                
                <FontAwesomeIcon className={classes.titleIcons} icon={faMapMarkerAlt} />
                <div className={classes.titleInfo}>
                    <span className={classes.titleCity}>Campinas</span>
                    <span className={classes.titleDate}>Quin, 10 de outubro de 2019</span>
                </div>
            </div>
            <div className={classes.titleTemperature}>
                <FontAwesomeIcon className={classes.titleIcons} icon={faThermometerQuarter} />
                <span className={classes.titleTemperatureText}>Min. </span>
                <span className={classes.titleTemperatureTextItalic}>15° </span>
                <FontAwesomeIcon className={classes.titleIcons} icon={faThermometerFull} />                
                <span className={classes.titleTemperatureText}>Max. </span>
                <span className={classes.titleTemperatureTextItalic}>26° </span>
            </div>
        </div>
        <div className={classes.contentContainer}>
            <div className={classes.contentTemperature}>
                <FontAwesomeIcon className={classes.titleIcons} icon={faThermometerHalf} />
                <span className={classes.temperature}>23°</span>            
            </div>
            <FontAwesomeIcon className={classes.titleIcons} icon={faCloud} />
        </div>
    </div>
);


export default CardDetails;