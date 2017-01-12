import React from 'react';
import {bindActionCreators, connect} from 'react-redux';

import NavBar from './navBar';
import AddUser from './addUser/addUser';
import UsersTable from './usersTable/usersTable';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <AddUser addUser={this.props.addUser}/>
                    <UsersTable
                        users={this.props.users}
                        editUser={this.props.editUser}
                        deleteUser={this.props.deleteUser}
                        toggleEdit={this.props.toggleEdit}
                        sortAsc={this.props.sortAsc}
                        sortDesc={this.props.sortDesc}
                        />
                </div>
            </div>
        );
    }
};

const mapStateToProps = function (state) {
    return {
        users: state
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        addUser: function (user) {
            dispatch({
                type: 'ADD_USERS',
                user
            });
        },
        editUser: function (index, editUser) {
            dispatch({
                type: 'EDIT_USERS',
                index,
                editUser
            });
        },
        deleteUser: function (index) {
            dispatch({
                type: 'DELETE_USERS',
                index
            });
        },
        toggleEdit: function (index) {
            dispatch({
                type: 'TOGGLE_EDIT',
                index
            });
        },
        sortAsc: function (prop) {
            dispatch({
                type: 'SORT_USERS_ASC',
                prop
            });
        },
        sortDesc: function (prop) {
            dispatch({
                type: 'SORT_USERS_DESC',
                prop
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
