import AnalyticsCard from "./AnalyticsCard";
import ProductsCard from "./ProductsCard";
import ProjectProgressCard from "./ProjectProgressCard";
import RemindersCard from "./RemindersCard";


const SubSection1 = () => {
    return (
        <div className="md:col-span-2 lg:col-span-3">
            <div className="flex flex-col items-center xl:grid xl:grid-cols-3 gap-3">
                <AnalyticsCard />
                <RemindersCard />
            </div>
            <div className="flex max-xl:flex-col items-center gap-3 mt-3">
                <ProductsCard />
                <ProjectProgressCard />
            </div>
        </div>
    );
};

export default SubSection1;