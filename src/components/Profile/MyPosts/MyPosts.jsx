import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map((el, i) => <Post
            key={i}
            message={el.message}
            likesCount={el.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChanged = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea
                        onChange={onPostChanged}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;