import React from 'react';

class FormError extends React.Component {
    render() {
        return (
            <div>
                <p className='text-warning'>There are errors. All fields is required</p>
                <p className='text-warning'>Name's length must be between 3 and 10</p>
                <p className='text-warning'>Age must be between 0 and 100</p>
            </div>
        );
    }
}

export default FormError;
