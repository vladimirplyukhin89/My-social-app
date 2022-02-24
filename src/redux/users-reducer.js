const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        //{ id: 1, followed: true, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        //{ id: 2, followed: false, fullName: 'Dmitry', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        //{ id: 3, followed: true, fullName: 'Dmitry', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {

                        return { ...user, followed: true };
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {

                        return { ...user, followed: false };
                    }
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        }
        default:
            return state;

    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer; 