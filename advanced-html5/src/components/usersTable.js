import React from 'react';
import { Modal } from 'react-bootstrap';

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            indexToDelete: -1
        };

        this.close = this.close.bind(this);
        this.hide = this.hide.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.props.deleteUser(this.state.indexToDelete);
        this.setState({
            showModal: false,
            indexToDelete: -1
        });
    }

    hide() {
        this.setState({
            showModal: false,
            indexToDelete: -1
        });
    }

    open(index) {
        this.setState({
            showModal: true,
            indexToDelete: index
        });
    }

    render() {
        return (
            <div>
                <table className='table'>
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
                                        <button type='button' className='btn btn-xs btn-success' onClick={this.props.editUser}>Edit</button>
                                        <button type='button' className='btn btn-xs btn-warning' onClick={() => {this.open(index)}}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Modal show={this.state.showModal} bsSize='sm'>
                    <Modal.Header>
                        <Modal.Title>Remove Person</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <p>Are you sure you want to remove this entry</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-warning' type='button' onClick={this.hide}>Cancel</button>
                        <button className='btn btn-primary' type='button' onClick={this.close}>Yes</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default UsersTable;


// <tr ng-repeat='user in users track by $index'>
//     <td>
//         {{user.edit ? user.name : null}}
//         <input type='text' ng-model='user.name' className='form-control' ng-hide='user.edit'>
//     </td>
//     <td>
//         {{user.edit ? user.gender : null}}
//         <select ng-model='user.gender' className='form-control' ng-hide='user.edit'>
//             <option>Male</option>
//             <option>Female</option>
//         </select>
//     </td>
//     <td>
//         {{user.edit ? user.age : null}}
//         <input type='number' ng-model='user.age' className='form-control' ng-hide='user.edit'>
//     </td>
    // <td>
    //     <button type='button' className='btn btn-xs btn-success' ng-click='editUser($index)'>Edit</button>
    //     <button type='button' className='btn btn-xs btn-warning' ng-click='removeUser($index)'>Delete</button>
    // </td>
// </tr>
