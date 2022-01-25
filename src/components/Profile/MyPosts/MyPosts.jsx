import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: "How's it going, bro?", likesCount: 15 },
        { id: 2, message: "When do you leave the city?", likesCount: 20 },
    ];

    let postsElements = posts
        .map((el, i) => <Post key={i} message={el.message} likesCount={el.likesCount} />);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;