import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    return localStorage.getItem('login') != null ? (
        <Outlet />
    ) : (<Navigate to='/' />)
}