import { ChevronUp } from "lucide-react";
import StatCard from "./StatCard";


const OverviewSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
            <StatCard
                title="Total Users"
                value={1200}
                highlighted={true}
            >
                <div className="text-xs 2xl:text-sm font-semibold mt-3 opacity-70 flex items-center gap-2">
                    <div className="px-1 py-0 border rounded-md flex items-center justify-center gap-0.5">
                        <span className="text-[11px]">5</span>
                        <ChevronUp size={8}/>
                    </div>
                    <p>Increased from last month</p>
                </div>
            </StatCard>
            <StatCard
                title="Active Users"
                value={1200}
            >
                <div className="text-xs 2xl:text-sm text-green-800 font-semibold mt-3 opacity-70 flex items-center gap-2">
                    <div className="px-1 py-0 border rounded-md flex items-center justify-center gap-0.5">
                        <span className="text-[11px]">5</span>
                        <ChevronUp size={8}/>
                    </div>
                    <p>Increased from last month</p>
                </div>
            </StatCard>
            <StatCard
                title="Revenue"
                value={1200}
            >
                <div className="text-xs 2xl:text-sm text-green-800 font-semibold mt-3 opacity-70 flex items-center gap-2">
                    <div className="px-1 py-0 border rounded-md flex items-center justify-center gap-0.5">
                        <span className="text-[11px]">5</span>
                        <ChevronUp size={8}/>
                    </div>
                    <p>Increased from last month</p>
                </div>
            </StatCard>
            <StatCard
                title="Growth"
                value={1200}
            >
                <div className="text-xs 2xl:text-sm text-green-800 font-semibold mt-2 opacity-70 flex items-center gap-2">
                    <p>On Discuss</p>
                </div>
            </StatCard>
        </div>
    );
};

export default OverviewSection;