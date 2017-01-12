import React from 'react';

class TableHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ageSort: false,
            ageSortIcon: false,
            nameSort: false,
            nameSortIcon: false,
            genderSort: false,
            genderSortIcon: false
        }

        this.sort = this.sort.bind(this);
    }

    sort(prop) {
        let sortTempVar = prop.concat('Sort');
        let iconTempVar = prop.concat('SortIcon');
        let newState = {};
        if(this.state[sortTempVar]) {
            this.props.sortDesc(prop);
        } else {
            this.props.sortAsc(prop);
        }
        newState[sortTempVar] = !this.state[sortTempVar];
        newState[iconTempVar] = !this.state[iconTempVar];
        this.setState(newState);
    }

    render () {
        return (
            <thead>
                <tr>
                    <th onClick={() => {
                        this.sort('name')
                    }}>
                        Name <i className={'fa '.concat(this.state.nameSort ? 'fa-long-arrow-down' : 'fa-long-arrow-up')} aria-hidden='true'></i>
                    </th>
                    <th onClick={() => {
                        this.sort('gender')
                    }}>
                        Gender <i className={'fa '.concat(this.state.genderSort ? 'fa-long-arrow-down' : 'fa-long-arrow-up')} aria-hidden='true'></i>
                    </th>
                    <th onClick={() => {
                        this.sort('age')
                    }}>
                        Age <i className={'fa '.concat(this.state.ageSort ? 'fa-long-arrow-down' : 'fa-long-arrow-up')} aria-hidden='true'></i>
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default TableHead;
