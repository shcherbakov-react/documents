import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactNode, useMemo } from 'react';
// import { setRole } from 'app/store/slices/role';

export function RequireAuth({ children }: any) {
    // const userRoles = useSelector(setRole).payload.role?.role;
    // const hasRequireRoles = useMemo(() => {
    //     if (!roles) {
    //         return true;
    //     }
    //     return roles.some((requiredRole) => {
    //         const hasRole = userRoles?.includes(requiredRole);
    //         return hasRole;
    //     });
    // }, [roles, userRoles]);
    let auth = localStorage.getItem('user');
    if (!auth) {
        return <Navigate to="/auth" />;
    }
    // if (!hasRequireRoles) {
    //     return <Navigate to="/" />;
    // }
    return children;
}