import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/DialogMessage';

const Dialogs = (props) => {
    //debugger
    let state = props.dialogsPage;

    let dialogsElements =
        state.dialogs.map((dialog, i) => <DialogItem
            key={i}
            name={dialog.name}
            id={dialog.id} />);

    let messagesElements =
        state.messages.map((message, i) => <DialogMessage
            key={i}
            message={message.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message"
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>



            <div className={classes.messages}>

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs;