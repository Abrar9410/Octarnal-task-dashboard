import { ChevronUp } from "lucide-react";
import StatCard from "./StatCard";
import { useEffect, useState } from "react";
import { getOverview } from "../../../actions/dashboard";
import Loading from "../../Loading";


const OverviewSection = () => {

    const [overviewData, setOverviewData] = useState<Record<string, number>>({});

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const overviewInfo = await getOverview();
                setOverviewData(overviewInfo);
            } catch (error) {
                console.error("Error fetching overview data:", error);
            }
        };
        fetchOverviewData();
    }, []);

    if (!overviewData) {
        return <Loading />;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
            <StatCard
                title="Total Users"
                value={overviewData?.totalUsers || 0}
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
                value={overviewData?.activeUsers || 0}
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
                value={overviewData?.revenue || 0}
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
                value={overviewData?.growth || 0}
            >
                <div className="text-xs 2xl:text-sm text-green-800 font-semibold mt-2 opacity-70 flex items-center gap-2">
                    <p>On Discuss</p>
                </div>
            </StatCard>
        </div>
    );
};

export default OverviewSection;