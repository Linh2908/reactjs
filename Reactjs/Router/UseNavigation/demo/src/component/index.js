import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout () {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
}

export default Layout;
