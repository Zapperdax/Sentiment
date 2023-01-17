import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectRoutes = () => {
    const { user } = useAuthContext();

    useEffect(() => {
        if (!user) toast("Login tera aba kersi!");
    }, [user])

    return (
        <>
            user ? (<Outlet />) : (
            <>
                {/* {() => toast("Login tera aba kersi!")} */}
                <ToastContainer />
                <Navigate to='/' />
            </>
            )
        </>)
}

export default ProtectRoutes