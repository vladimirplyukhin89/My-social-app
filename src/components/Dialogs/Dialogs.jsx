import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/DialogMessage';

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let msg = newMessageElement.current.value;
        alert(msg);
    }

    let dialogsElements =
        props.state.dialogs.map((dialog, i) => <DialogItem
            key={i}
            name={dialog.name}
            id={dialog.id} />);

    let messagesElements =
        props.state.messages.map((message, i) => <DialogMessage
            key={i}
            message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>
                {messagesElements}

                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>

                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>



            <div className={classes.messages}>

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs;