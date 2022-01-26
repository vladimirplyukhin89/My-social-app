import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/DialogMessage';

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map((dialog, i) => <DialogItem
            key={i}
            name={dialog.name}
            id={dialog.id} />);

    let messagesElements =
        props.state.messages.map((message, i) => <DialogMessage
            key={i}
            message={message.message} />);

    //let dialogsAvatars =
    //    props.images.map((images, i) => <DialogItem
    //        key={i}
    //        images={images.image} />);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messagesElements}

            </div>

            <div className={classes.messages}>

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs;