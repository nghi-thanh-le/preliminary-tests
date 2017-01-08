import React from 'react';
import {bindActionCreators, connect} from 'react-redux';

import AddUser from './addUser';
import UsersTable from './usersTable';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AddUser />
                <UsersTable users={this.props.users}/>
            </div>
        );
    }
};

const mapStateToProps = function (state) {
    return {
        users: state.users
    };
}

const mapDispatchToProps = function (dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
