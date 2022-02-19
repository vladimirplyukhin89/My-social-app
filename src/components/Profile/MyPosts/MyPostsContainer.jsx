import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    //debugger
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChanged = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts
                        updateNewPost={onPostChanged}
                        addPost={addPost}
                        posts={store.getState().profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText}
                    />
                }
            }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;