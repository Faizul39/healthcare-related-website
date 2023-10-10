import React from 'react';
import'./Header.css'


const Header = () => {
    return (
        <div className='header-body'>
            <nav className="navbar navbar-expand-lg navbar light bg-light">
                <div className='container-fuild'>
                    <nav className='header'>
                        <navlink to="/home" style={{TextDecoration:'none', margin:'5px', color:'white'}}><i className=''>Home</i></navlink>
                        <navlink to="/about us" style={{TextDecoration:'none', margin:'5px', color:'white'}}>About Us</navlink>
                        <navlink to="/Shedule" style={{ textDecoration: 'none',margin:'5px',color: 'white' }}>Schedule</navlink>
                        <navlink to="/Contact" style={{ textDecoration: 'none',margin:'5px',color: 'white' }}>Contact</navlink>
                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;