import React from 'react';

class AddUser extends React.Component {
    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" placeholder="Name" className="form-control"/>
                    <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <input type="number" placeholder="Age" className="form-control"/>
                    <button type="button" className="btn btn-default">Submit</button>
                </div>
            </form>
        );
    }
};

export default AddUser;
