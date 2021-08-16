import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" className="mb-5">
            <div className="navbar-header">
                <Navbar.Brand>Translator</Navbar.Brand>
            </div>
        </Navbar>
    );
}