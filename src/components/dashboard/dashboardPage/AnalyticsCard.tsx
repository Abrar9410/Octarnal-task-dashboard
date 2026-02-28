import { useEffect, useState } from "react";
import { getAnalytics } from "../../../actions/dashboard";
import Loading from "../../Loading";


const AnalyticsCard = () => {
    const [analyticsData, setAnalyticsData] = useState<Record<string,number>[]>([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const analyticsRes = await getAnalytics();
                setAnalyticsData(analyticsRes);
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            }
        };
        fetchAnalytics();
    }, []);

    if (!analyticsData || analyticsData.length === 0) {
        return <Loading />;
    };

    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    const maxViews = Math.max(...analyticsData.map(d => d.views));
    // const minViews = Math.min(...analyticsData.map(d => d.views));

    // Create 7-day structure
    const chartData = weekDays.map((day, index) => {
        if (index < analyticsData.length) {
            return {
                day,
                views: analyticsData[index].views
            };
        }
        return {
            day,
            views: null
        };
    });

    return (
        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm w-full">
            <h3 className="text-lg font-semibold mb-6">
                Product Analytics
            </h3>

            <div className="flex items-end justify-between h-40">

                {chartData.map((item, index) => {
                    let height = 40; // minimum height

                    if (item.views) {
                        height = (item.views / maxViews) * 150;
                    };

                    // Color Logic
                    let barStyle = "";

                    if (!item.views) {
                        barStyle =
                            "bg-[repeating-linear-gradient(45deg,#E5E7EB,#E5E7EB_8px,#F3F4F6_8px,#F3F4F6_16px)]";
                    } else if (item.views > maxViews * 0.75) {
                        barStyle = "bg-[#166534]"; // Dark Green
                    } else {
                        barStyle = "bg-[#34D399]"; // Light Green
                    };

                    return (
                        <div key={index} className="flex flex-col items-center gap-3">

                            <div className="flex items-end h-40">
                                <div
                                    style={{ height: `${height}px` }}
                                    className={`w-16 rounded-full transition-all duration-700 ${barStyle}`}
                                />
                            </div>

                            <span className="text-sm text-gray-500 font-medium">
                                {item.day}
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default AnalyticsCard;