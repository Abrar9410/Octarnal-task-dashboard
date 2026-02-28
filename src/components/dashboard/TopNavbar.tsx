import { Search, Mail, Bell } from "lucide-react";

const TopNavbar = () => {
    return (
        <div className="bg-gray-100 flex justify-between items-center p-4 rounded-2xl mb-2">

            {/* Search Bar */}
            <div className="flex items-center gap-4 w-full max-w-xl">

                <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                    <input
                        type="text"
                        placeholder="Search task"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-16 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F7A4F] text-sm"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-md">
                        ⌘ F
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-3 ml-6">

                <button className="cursor-pointer p-3 rounded-full bg-white">
                    <Mail className="text-gray-600" size={20} />
                </button>

                <button className="cursor-pointer p-3 rounded-full bg-white">
                    <Bell className="text-gray-600" size={20} />
                </button>

                <div className="flex items-center gap-2">

                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className="w-11 h-11 rounded-full object-cover"
                    />

                    <div className="leading-relaxed">
                        <p className="font-bold text-gray-900">
                            Totok Michael
                        </p>
                        <p className="text-sm text-gray-500 font-normal">
                            tmichael20@mail.com
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TopNavbar;