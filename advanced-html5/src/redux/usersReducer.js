const sampleDB = [{
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

let initialState = [];

const ID = () => {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

for (let i = 0; i < 100; i++) {
    let index = Math.floor((Math.random() * 4));
    initialState.push({
        id: ID(),
        ...sampleDB[index]
    });
}

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
