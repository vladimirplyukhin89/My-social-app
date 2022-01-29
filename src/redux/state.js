let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "How's it going, bro?", likesCount: 15 },
            { id: 2, message: "When do you leave the city?", likesCount: 20 },
        ],
        newPostText: 'it-kamasutra',
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dave" },
            { id: 2, name: "John" },
            { id: 3, name: "Tony" },
            { id: 4, name: "Mike" },
        ],
        messages: [
            { id: 1, message: "Hey, bro" },
            { id: 2, message: "How's it going?" },
            { id: 3, message: "Everything's ok" },
        ],
        //newMessageText: 'samurai',
        images: [
            { id: 1, image: "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg" },
            { id: 2, image: "https://icdn.lenta.ru/images/2020/09/29/02/20200929023939972/wide_4_3_1877a229bec57e02a038548726d8dc41.jpg" },
            { id: 3, image: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" },
            { id: 4, image: "https://www.kinonews.ru/insimgs/2018/newsimg/newsimg83415.jpg" }
        ],
        newMsgText: 'it-kamasutra'
    },
    sidebar: {
        friends: [
            {},
            {},
            {}
        ],
        images: [
            {},
            {},
            {}
        ]
    }

};
export const addPost = () => {

    let newPost = {
        id: 5, message: state.profilePage.newPostText, likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const updateNewPost = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

//export let addMessage = () => {

//    let newMessage = {
//        id: 4, message: state.dialogsPage.newMessageText
//    };

//    state.dialogsPage.messages.push(newMessage);
//    rerenderEntireTree(state);

//};

//export let updateNewMessage = (newText) => {

//    state.dialogsPage.newMessageText = newText;
//    rerenderEntireTree(state);
//};

export default state;