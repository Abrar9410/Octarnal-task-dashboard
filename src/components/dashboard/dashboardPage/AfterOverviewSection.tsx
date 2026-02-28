import SubSection1 from "./SubSection1";
import SubSection2 from "./SubSection2";


const AfterOverviewSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            <SubSection1 />
            <SubSection2 />
        </div>
    );
};

export default AfterOverviewSection;