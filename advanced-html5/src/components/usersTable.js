import React from 'react';

class UsersTable extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button type="button" className="btn btn-xs btn-success">Edit</button>
                                    <button type="button" className="btn btn-xs btn-warning">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
};

export default UsersTable;

// <tr ng-repeat="user in users track by $index">
//     <td>
//         {{user.edit ? user.name : null}}
//         <input type="text" ng-model="user.name" className="form-control" ng-hide="user.edit">
//     </td>
//     <td>
//         {{user.edit ? user.gender : null}}
//         <select ng-model="user.gender" className="form-control" ng-hide="user.edit">
//             <option>Male</option>
//             <option>Female</option>
//         </select>
//     </td>
//     <td>
//         {{user.edit ? user.age : null}}
//         <input type="number" ng-model="user.age" className="form-control" ng-hide="user.edit">
//     </td>
    // <td>
    //     <button type="button" className="btn btn-xs btn-success" ng-click="editUser($index)">Edit</button>
    //     <button type="button" className="btn btn-xs btn-warning" ng-click="removeUser($index)">Delete</button>
    // </td>
// </tr>
