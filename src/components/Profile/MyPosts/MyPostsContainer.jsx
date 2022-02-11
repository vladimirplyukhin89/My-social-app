import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    //debugger
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPost={onPostChanged}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;