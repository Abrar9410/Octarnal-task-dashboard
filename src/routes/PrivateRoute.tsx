import { Navigate, useLocation } from "react-router";



const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    const token = localStorage.getItem("token");
    const location = useLocation();

    // if (loading) {
    //     return <Loading></Loading>;
    // }
    if (token) {
        return children;
    };
    
    return <Navigate state={location.pathname} to={"/"}></Navigate>;
};

export default PrivateRoute;