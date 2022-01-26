import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    // наш url из props
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>
                {props.name}
                <div>
                    <img className={classes.dialogImage} src="https://www.kinonews.ru/insimgs/2018/newsimg/newsimg83415.jpg" />
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;