import { Outlet } from "react-router";
import Logo from "../components/Logo";


const AuthLayout = () => {
    return (
        <div className="min-h-screen">
            <header className="border-b border-[#1F7A4F] sticky top-0 z-10 bg-opacity-30 backdrop-blur-md">
                <div className="container mx-auto px-2 h-16 flex items-center">
                    <Logo />
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;