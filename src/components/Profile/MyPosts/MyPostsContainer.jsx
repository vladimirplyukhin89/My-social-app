import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

//const MyPostsContainer = () => {
//    return (
//        <StoreContext.Consumer>
//            {
//                (store) => {
//                    let addPost = () => {
//                        store.dispatch(addPostActionCreator());
//                    };

//                    let onPostChanged = (text) => {
//                        let action = updateNewPostTextActionCreator(text);
//                        store.dispatch(action);
//                    };

//                    return <MyPosts
//                        updateNewPost={onPostChanged}
//                        addPost={addPost}
//                        posts={store.getState().profilePage.posts}
//                        newPostText={store.getState().profilePage.newPostText}
//                    />
//                }
//            }

//        </StoreContext.Consumer>
//    )
//}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;