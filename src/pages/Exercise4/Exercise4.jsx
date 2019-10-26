import React, { Component } from "react";
import classes from "./Excercise4.module.scss";

import Header from './components/Header/Header'
import CardDetails from './components/cards/CardDetails/CardDetails'
import CardDay from './components/cards/CardDay/CardDay'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSun    
} from '@fortawesome/free-solid-svg-icons'

export default class Exercise4 extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <CardDetails />
                    <div className={classes.dayContainer}>
                        <CardDay
                            day='sexta'
                            date='11/10/2019'
                            icon={<FontAwesomeIcon className={classes.titleIcons} icon={faSun} />}
                            weather='Ensolarado'
                            min={10}
                            max={20}
                        />
                        <CardDay
                            day='sexta'
                            date='11/10/2019'
                            icon={<FontAwesomeIcon className={classes.titleIcons} icon={faSun} />}
                            weather='Ensolarado'
                            min={10}
                            max={20} />
                        <CardDay
                            day='sexta'
                            date='11/10/2019'
                            icon={<FontAwesomeIcon className={classes.titleIcons} icon={faSun} />}
                            weather='Ensolarado'
                            min={10}
                            max={20} />
                        <CardDay
                            day='sexta'
                            date='11/10/2019'
                            icon={<FontAwesomeIcon className={classes.titleIcons} icon={faSun} />}
                            weather='Ensolarado'
                            min={10}
                            max={20} />
                    </div>
                </div>
            </div>
        );
    }

}
