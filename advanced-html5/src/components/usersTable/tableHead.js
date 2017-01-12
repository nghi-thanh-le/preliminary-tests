import React from 'react';

class TableHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ageSort: false,
            nameSort: false,
            genderSort: false
        }

        this.sort = this.sort.bind(this);
    }

    sort(prop) {
        let tempVar = prop.concat('Sort');
        let newState = {};
        if(this.state[tempVar]) {
            this.props.sortDesc(prop);
        } else {
            this.props.sortAsc(prop);
        }
        newState[tempVar] = !this.state[tempVar];
        this.setState(newState);
    }

    render () {
        return (
            <thead>
                <tr>
                    <th onClick={() => {
                        this.sort('name')
                    }}>Name</th>
                    <th onClick={() => {
                        this.sort('gender')
                    }}>Gender</th>
                    <th onClick={() => {
                        this.sort('age')
                    }}>Age</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default TableHead;
