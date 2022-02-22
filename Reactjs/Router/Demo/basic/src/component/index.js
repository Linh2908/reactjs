import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout () {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/News" >News</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout;
