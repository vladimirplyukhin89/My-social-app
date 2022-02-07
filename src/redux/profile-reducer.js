const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        { id: 1, message: "How's it going, bro?", likesCount: 15 },
        { id: 2, message: "When do you leave the city?", likesCount: 20 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST, newText: text
});


export default profileReducer; 