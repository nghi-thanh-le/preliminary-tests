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

const ID = () => {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

export default function usersGenerator() {
    let users = [];
    for (let i = 0; i < 100; i++) {
        let index = Math.floor((Math.random() * 4));
        users.push({
            id: ID(),
            ...sampleDB[index]
        });
    }

    return users;
};
