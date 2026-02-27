import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen p-4">
            <Sidebar />
            <main className="flex-1 p-6 lg:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;