import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbars/navbar';

function AdminLayout(props) {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default AdminLayout;