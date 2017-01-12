import usersGenerator from './libs/usersGenerator';

let initialState = usersGenerator();

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
        case 'SORT_USERS_ASC':
            newState.sort((a, b) => {
                if (a[action.prop] > b[action.prop]) {
                    return 1;
                } else if (a[action.prop] < b[action.prop]) {
                    return -1;
                } else {
                    return 0;
                }
            });
            return newState;
        case 'SORT_USERS_DESC':
            newState.sort((a, b) => {
                if (a[action.prop] > b[action.prop]) {
                    return -1;
                } else if (a[action.prop] < b[action.prop]) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return newState;
        default:
            return state;
    }
}
