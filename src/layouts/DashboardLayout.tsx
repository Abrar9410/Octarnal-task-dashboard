import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";


const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen p-4">
            <Sidebar />
            <main className="flex-1">
                <TopNavbar />
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;