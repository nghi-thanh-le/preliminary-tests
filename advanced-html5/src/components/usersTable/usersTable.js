import React from 'react';
import {Pagination} from 'react-bootstrap';

import TableHead from './tableHead';
import TableBody from './tableBody';

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLimit: 20,
            activePage: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({activePage: eventKey});
    }

    render() {
        let numPage;
        if(this.props.users.length <= this.state.pageLimit) {
            numPage = 1;
        } else {
            numPage = Math.ceil(this.props.users.length / this.state.pageLimit);
        }

        return (
            <div>
                <table className='table'>
                    <TableHead sortAsc={this.props.sortAsc} sortDesc={this.props.sortDesc} />
                    <TableBody
                        users={this.props.users}
                        deleteUser={this.props.deleteUser}
                        editUser={this.props.editUser}
                        toggleEdit={this.props.toggleEdit}
                        pageLimit={this.state.pageLimit}
                        activePage={this.state.activePage} />
                </table>
                <div className='text-center'>
                    <Pagination
                        bsSize="small"
                        activePage={this.state.activePage}
                        items={numPage}
                        maxButtons={4}
                        onSelect={this.handleSelect}/>
                </div>
            </div>
        );
    }
};

export default UsersTable;
