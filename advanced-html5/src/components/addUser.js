import React from 'react';
import store from '../redux/store';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                age: 0,
                gender: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.addUser({
            name: this.refs.userName.value,
            age: this.refs.userAge.value,
            gender: this.refs.userGender.value
        });
    }

    render() {
        return (
            <div>
                <h1>Add a person</h1>
                <form className='form-inline'>
                    <div className='form-group'>
                        <input type='text' placeholder='Name' className='form-control' ref='userName' />
                        <select className='form-control' ref='userGender'>
                            <option value="" disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type='number' placeholder='Age' className='form-control' ref='userAge'/>
                        <button type='button' className='btn btn-default' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default AddUser;
