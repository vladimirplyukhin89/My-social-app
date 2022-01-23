import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src='https://www.disneytouristblog.com/wp-content/uploads/2015/08/avatar-disney-world-pandora-animal-kingdom-186.jpg' />
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;