import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/Dialogs';
import DialogMessage from './Message/Dialogs';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "John" },
        { id: 3, name: "Tony" },
        { id: 4, name: "Mike" },
    ];
    let dialogsElements = dialogs
        .map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    let messages = [
        { id: 1, message: "Hey, bro" },
        { id: 2, message: "How's it going?" },
        { id: 3, message: "Everything's ok" },
    ];
    let messagesElements = messages
        .map((message, i) => <DialogMessage key={i} message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;