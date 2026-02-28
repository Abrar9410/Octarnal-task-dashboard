import AfterOverviewSection from "../../components/dashboard/dashboardPage/AfterOverviewSection";
import HeaderSection from "../../components/dashboard/dashboardPage/HeaderSection";
import OverviewSection from "../../components/dashboard/dashboardPage/OverviewSection";


const DashboardPage = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-2xl">
            <HeaderSection />
            <OverviewSection />
            <AfterOverviewSection />
        </div>
    );
};

export default DashboardPage;