const initState = {
    users: [
        { id: 1, name: 'Hiep' },
        { id: 2, name: 'Hang' }
    ],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>> run into deletion', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            console.log('state truoc khi xoa', state)
            return { ...state, users: users };
            break;
        case 'CREATE_USER':
            const id = Math.floor(Math.random() * 2002131)
            let user = { id, name: `random - ${id}` }
            return {...state,users:[...state.users,user]}
            break;
        default:
            return state;

    }
}
export default rootReducer;