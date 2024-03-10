import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

const Home = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            navigate("/login");
        })
        .catch((e) => {
            console.error(e);
        })
    }

    if(loading) return <p>User Info Loading....</p>;
    return (
        <div>
            Welcome {user?.email}
            <button 
            className="bg-black text-white rounded p-1"
            onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};
export default Home;