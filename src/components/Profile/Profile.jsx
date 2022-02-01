import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;