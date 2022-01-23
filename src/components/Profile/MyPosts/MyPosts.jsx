import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div >
                <Post message="How's it going, bro?" likesCount="15" />
                <Post message="When do you leave the city?" likesCount="20" />
            </div>
        </div>
    )
}

export default MyPosts;