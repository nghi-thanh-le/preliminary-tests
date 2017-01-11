import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='#'>Nord Software</a>
                </div>
            </div>
        </nav>
        );
    }
}

export default NavBar;
