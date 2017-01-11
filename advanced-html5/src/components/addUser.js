import React from 'react';
import store from '../redux/store';

import FormError from './formError';

const validateName = value => value && value.length <= 10 && value.length >=3;
const validateAge = value => value && value >= 0 && value <= 100;

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                age: 0,
                gender: ''
            },
            formError: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showError = this.showError.bind(this);
    }

    showError() {
        const _this = this;
        this.setState({
            formError: true
        });

        setTimeout(() => {
            _this.setState({
                formError: false
            });
        }, 3000);
    }

    handleSubmit(e) {
        const _thisForm = {
            name: this.refs.userName.value,
            age: parseInt(this.refs.userAge.value),
            gender: this.refs.userGender.value
        };

        if(validateName(_thisForm.name) && validateAge(_thisForm.age)) {
            this.props.addUser({
                name: this.refs.userName.value,
                age: this.refs.userAge.value,
                gender: this.refs.userGender.value
            });
        } else {
            this.showError();
        }
    }

    render() {
        return (
            <div>
                <h1>Add a person</h1>
                <form className='form-inline'>
                    <div className='form-group'>
                        <input type='text' placeholder='Name' className='form-control' ref='userName' required/>
                        <select className='form-control' ref='userGender' required>
                            <option value="" disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type='number' placeholder='Age' className='form-control' ref='userAge' required/>
                        <button type='button' className='btn btn-default' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                { this.state.formError ? <FormError /> : null }
            </div>
        );
    }
};

export default AddUser;
