import React from 'react';
import classes from './../Dialogs.module.css';

const DialogMessage = (props) => {

    return (
        <div>
            <div>
                <img className={classes.dialogsImage} src="https://static4.depositphotos.com/1012392/301/i/600/depositphotos_3010114-stock-photo-rainbow-circle.jpg" />
            </div>

            <div>
                <div className={classes.message}>{props.message}</div>
            </div>

        </div>
    )
}

export default DialogMessage;