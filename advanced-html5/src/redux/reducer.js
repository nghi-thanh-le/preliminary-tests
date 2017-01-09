const initialState = [{
    name: 'John Doe',
    gender: 'Male',
    age: 32,
    edit: true
}, {
    name: 'Diana Barry',
    gender: 'Female',
    age: 28,
    edit: true
}, {
    name: 'Bruce Wayne',
    gender: 'Male',
    age: 46,
    edit: true
}, {
    name: 'Jane Porter',
    gender: 'Female',
    age: 19,
    edit: true
}];

export default (state = initialState, action) => {
    let newState = [].concat(state);
    switch (action.type) {
        case 'UPDATE_USERS':
            return action.users;
            break;
        case 'ADD_USERS':
            return newState.concat([action.user]);
            break;
        case 'DELETE_USERS':
            return action.users;
            break;
        default:
            return state;
    }
}
