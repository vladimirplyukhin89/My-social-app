import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p ? classes.selectedPage : classes.notSelectedPages}
                        onClick={() => { props.onPageChanged(p) }}
                    > {p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { { props.unfollow(user.id) } }}>Unfollow</button>
                                : <button onClick={() => { { props.follow(user.id) } }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
                    </span>
                </div>)

            }
        </div>
    )
};

export default Users;
