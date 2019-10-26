import React from 'react';
import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella,faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => (
    <div className={classes.header}>
        <div className={classes.logoBox}>
            <FontAwesomeIcon className={classes.logoIcon} icon={faUmbrella} />
            <span className={classes.logoText}>CLIMÃO.COM</span>
        </div>
        <div className={classes.boxSearch}>
            <input type="text" placeholder="Buscar Cidade" />
            <FontAwesomeIcon className={classes.inputIcon} icon={faSearch} />
        </div>
        
    </div>
);


export default Header;