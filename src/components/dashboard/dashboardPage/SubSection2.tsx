import UsersCard from "./UsersCard";
import TimeTrackerCard from "./TimeTrackerCard";


const SubSection2 = () => {
    return (
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-1 flex flex-col items-center justify-center space-y-3">
            <UsersCard />
            <TimeTrackerCard />
        </div>
    );
};

export default SubSection2;