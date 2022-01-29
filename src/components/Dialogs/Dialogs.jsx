import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/DialogMessage';
//import { addMessage, updateNewPost } from '../../redux/state';

const Dialogs = (props) => {
    //debugger
    let dialogsElements =
        props.state.dialogs.map((dialog, i) => <DialogItem
            key={i}
            name={dialog.name}
            id={dialog.id} />);

    let messagesElements =
        props.state.messages.map((message, i) => <DialogMessage
            key={i}
            message={message.message} />);


    let newMessageElement = React.createRef();
    //debugger;
    //let addMessage = () => {
    //    props.addMessage();
    //    props.updateNewMessage('');
    //}

    //let onMessageChanged = () => {
    //    let text = newMessageElement.current.value;
    //    props.updateNewMessage(text);
    //}

    let addMsg = () => {
        let text = newMessageElement.current.value;
        props.addMsg(text);
        newMessageElement.current.value = '';

    }

    let onMsgChanged = () => {

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>
                {messagesElements}

                <div>
                    <textarea
                        onChange={onMsgChanged}
                        ref={newMessageElement}
                        value={props.newMsgText} />
                </div>

                <div>
                    <button onClick={addMsg}>Add message</button>
                </div>

            </div>



            <div className={classes.messages}>

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs;