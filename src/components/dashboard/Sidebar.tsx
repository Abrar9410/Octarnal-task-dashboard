import { Link, useLocation } from "react-router";
import Logo from "../Logo";
import { Calendar, ChartColumnIncreasing, Drama, LayoutDashboard, LifeBuoy, LogOut, Settings, UsersRound } from "lucide-react";



const Sidebar = () => {

    const location = useLocation();

    return (
        <aside className="w-64 bg-gray-100 flex flex-col justify-between py-6 mr-3 rounded-2xl">

            {/* Top Section */}
            <div>
                <Logo className="mb-10 ml-7" />

                <div className="space-y-4">
                    <h3 className="text-gray-500 text-xs font-semibold ml-7">MENU</h3>
                    <div className="flex flex-col">
                        <Link to="/dashboard" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard" ? "bg-[#1F7A4F]" : "bg-gray-100"}`}/>
                            <LayoutDashboard className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Dashboard</span>
                        </Link>
                        <Link to="/dashboard/tasks" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/tasks" ? "bg-[#1F7A4F]" : "bg-gray-100"}`}/>
                            <Drama className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/tasks" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/tasks" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Tasks</span>
                        </Link>
                        <Link to="/dashboard/calendar" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/calendar" ? "bg-[#1F7A4F]" : "bg-gray-100"}`}/>
                            <Calendar className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/calendar" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/calendar" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Calendar</span>
                        </Link>
                        <Link to="/dashboard/analytics" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/analytics" ? "bg-[#1F7A4F]" : "bg-gray-100"}`}/>
                            <ChartColumnIncreasing className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/analytics" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/analytics" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Analytics</span>
                        </Link>
                        <Link to="/dashboard/team" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/team" ? "bg-[#1F7A4F]" : "bg-gray-100"}`}/>
                            <UsersRound className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/team" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/team" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Team</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-10 space-y-4">
                    <h3 className="text-gray-500 text-xs font-semibold ml-7">GENERAL</h3>
                    <div className="flex flex-col">
                        <Link to="/dashboard/settings" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/settings" ? "bg-[#1F7A4F]" : "bg-gray-100"}`} />
                            <Settings className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/settings" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/settings" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Settings</span>
                        </Link>
                        <Link to="/dashboard/help" className="h-10 flex items-center">
                            <div className={`w-2 h-full rounded-r-2xl ${location.pathname === "/dashboard/help" ? "bg-[#1F7A4F]" : "bg-gray-100"}`} />
                            <LifeBuoy className={`w-6 ml-4 mr-3 ${location.pathname === "/dashboard/help" ? "text-[#1F7A4F]" : "text-gray-500"}`} />
                            <span className={`text-lg ${location.pathname === "/dashboard/help" ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Help</span>
                        </Link>
                        <p className="h-10 flex items-center text-gray-500 text-lg cursor-pointer hover:text-red-500">
                            <LogOut className="w-6 ml-6 mr-3" />
                            Logout
                        </p>
                    </div>
                </div>
            </div>

            {/* Download Card */}
            <div className="w-10/12 mx-auto bg-linear-to-br from-green-950 to-green-300 rounded-2xl p-4 text-white">
                <div className="flex flex-col text-lg">
                    <p className="leading-tight">
                        <span className="font-semibold">Download</span> our <br/> Mobile App
                    </p>
                </div>
                <p className="text-[10px] mt-2 text-white/70">Get easy in another way</p>
                <button className="mt-8 w-full bg-[#1F7A4F] text-white py-2 rounded-full text-xs font-medium">
                    Download
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;