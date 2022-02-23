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
        case ADD_POST: {
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            //let stateCopy = { ...state }
            return state;

    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST, newText: text
});


export default profileReducer; 