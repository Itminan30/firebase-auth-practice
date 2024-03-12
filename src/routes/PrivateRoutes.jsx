import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const PrivateRoutes = () => {
    const [user, loading, error] = useAuthState(auth);

    if(loading) return <p>User Data Loading...</p>
    return (
        <>
            {
                user ? <Outlet /> : <Navigate to="/login" />
            }
        </>
    );
};

export default PrivateRoutes;