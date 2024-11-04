import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-light sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#reports">Reportes</Nav.Link>
                <Nav.Link href="#settings">Configuraciones</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
