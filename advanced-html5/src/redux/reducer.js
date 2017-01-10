const initialState = [{
    name: 'John Doe',
    gender: 'Male',
    age: 32,
    edit: false
}, {
    name: 'Diana Barry',
    gender: 'Female',
    age: 28,
    edit: false
}, {
    name: 'Bruce Wayne',
    gender: 'Male',
    age: 46,
    edit: false
}, {
    name: 'Jane Porter',
    gender: 'Female',
    age: 19,
    edit: false
}];

export default (state = initialState, action) => {
    let newState = [].concat(state);
    switch (action.type) {
        case 'TOGGLE_EDIT':
            newState[action.index].edit = !newState[action.index].edit;
            return newState;
            break;
        case 'EDIT_USERS':
            newState.splice(action.index, 1, action.editUser);
            return newState;
            break;
        case 'ADD_USERS':
            return newState.concat([action.user]);
            break;
        case 'DELETE_USERS':
            newState.splice(action.index, 1);
            return newState;
            break;
        default:
            return state;
    }
}
