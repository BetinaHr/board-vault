import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth.js';

export default function GuestGuard() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/catalog" replace />;
    }

    return <Outlet />;
}
