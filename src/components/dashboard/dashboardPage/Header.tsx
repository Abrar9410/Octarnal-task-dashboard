import { Plus } from "lucide-react";


const Header = () => {
    return (
        <div className="flex max-lg:flex-col justify-between items-center max-lg:gap-2 mb-8">
            <div className="max-lg:w-full flex flex-col max-md:items-center gap-2">
                <h2 className="max-lg:text-center text-4xl font-semibold text-gray-900">Dashboard</h2>
                <p className="max-lg:text-center text-gray-500 font-normal">
                    Plan, prioritize, and accomplish your tasks with ease.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <button className="cursor-pointer flex justify-center items-center gap-3 bg-linear-to-br from-green-900 to-[#1F7A4F] text-white px-5 py-2.5 rounded-full font-normal shadow-sm hover:opacity-90 transition">
                    <Plus size={18} />
                    Add Project
                </button>

                <button className="cursor-pointer bg-white border-2 border-[#1F7A4F] text-[#1F7A4F] px-5 py-2.5 rounded-full font-semibold">
                    Import Data
                </button>
            </div>
        </div>
    );
};

export default Header;