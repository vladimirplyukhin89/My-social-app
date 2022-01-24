import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

// подкомпонента в Dialogs
const DialogItem = (props) => {
    // наш url из props
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const DialogMessage = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "John" },
        { id: 3, name: "Tony" },
        { id: 4, name: "Mike" },
    ]

    let messagesData = [
        { id: 1, message: "Hey, bro" },
        { id: 2, message: "How's it going?" },
        { id: 3, message: "Everything's ok" },
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />

                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />

            </div>

            <div className={classes.messages} >
                <DialogMessage message={messagesData[0].message} />

                <DialogMessage message={messagesData[1].message} />

                <DialogMessage message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;