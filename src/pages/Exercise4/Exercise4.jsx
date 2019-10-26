import React, { Component } from "react";
import { Link } from "react-router-dom";
import DescriptionExercise from "../DescriptionExercise";
import prototypeClimao from "../../assets/prototypes/climao.png";
import classes from "./Excercise4.module.scss";

import Header from './components/Header/Header'
import CardDetails from './components/cards/CardDetails/CardDetails'

export default class Exercise4 extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <CardDetails />
                </div>
            </div>
        );
    }
    
}
