import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to='/dialogs/1'>
                        Kris
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>
                        John
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>
                        Tony
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialog4'>
                        Mike
                    </NavLink>
                </div>
            </div>

            <div className={classes.messages} >
                <div className={classes.message}>Hey</div>
                <div className={classes.message}>whats up</div>
                <div className={classes.message}>Come on</div>
            </div>
        </div>
    )
}

export default Dialogs;