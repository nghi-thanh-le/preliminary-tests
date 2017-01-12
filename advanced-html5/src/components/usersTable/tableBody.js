import React from 'react';
import {Modal} from 'react-bootstrap';

class TableBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            indexToDelete: -1
        };
        this.edit = this.edit.bind(this);
        this.close = this.close.bind(this);
        this.hide = this.hide.bind(this);
        this.open = this.open.bind(this);
    }

    edit(index) {
        if (this.props.users[index].edit) {
            this.props.editUser(index, {
                name: this.refs.editUserName.value,
                age: this.refs.editUserAge.value,
                gender: this.refs.editUserGender.value,
                edit: true
            });
            this.props.toggleEdit(index);
        } else {
            this.props.toggleEdit(index);
        }
    }

    close() {
        this.props.deleteUser(this.state.indexToDelete);
        this.setState({showModal: false, indexToDelete: -1});
    }

    hide() {
        this.setState({showModal: false, indexToDelete: -1});
    }

    open(index) {
        this.setState({showModal: true, indexToDelete: index});
    }

    handleSelect(eventKey) {
        this.setState({activePage: eventKey});
    }

    render () {
        let iteration = 0,
            start = this.props.activePage * this.props.pageLimit - this.props.pageLimit,
            stop = this.props.activePage * this.props.pageLimit,
            tableRows = [],
            _this = this;
        this.props.users.map((user, index) => {
            if (iteration >= stop)
                return;
            if (start <= iteration) {
                tableRows.push(
                    <tr key={index}>
                        <td>
                            {user.edit
                                ? <input type='text' ref='editUserName' className='form-control' defaultValue={user.name}/>
                            : user.name}
                        </td>
                        <td>
                            {user.edit
                                ? <select ref='editUserGender' className='form-control' defaultValue={user.gender}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                : user.gender}
                        </td>
                        <td>
                            {user.edit
                                ? <input type='number' ref='editUserAge' className='form-control' defaultValue={user.age}/>
                            : user.age}
                        </td>
                        <td>
                            <button type='button' className='btn btn-xs btn-success' onClick={() => {
                                _this.edit(index)
                            }}>Edit</button>
                            <button type='button' className='btn btn-xs btn-warning' onClick={() => {
                                _this.open(index)
                            }}>Delete</button>
                        </td>
                    </tr>
                )
            }
            iteration++;
        });
        return (
            <tbody>
                {tableRows}
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
            </tbody>
        );
    }
}

export default TableBody;
