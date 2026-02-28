import Header from "../../components/dashboard/dashboardPage/Header";
import OverviewSection from "../../components/dashboard/dashboardPage/OverviewSection";


const DashboardPage = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-2xl h-full">
            <Header />
            <OverviewSection />
        </div>
    );
};

export default DashboardPage;