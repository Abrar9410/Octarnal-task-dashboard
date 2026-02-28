import { Pause, Square } from "lucide-react";


const TimeTrackerCard = () => {
    return (
        <div className="bg-linear-to-br from-green-300 to-green-950 text-white rounded-2xl p-6">
            <h4 className="text-xl font-medium mb-4">Time Tracker</h4>
            <div className="text-center text-4xl font-bold mb-6">01:24:08</div>

            <div className="flex justify-center items-center gap-4">
                <button className="bg-white text-[#1F7A4F] p-3 rounded-full">
                    <Pause size={25} />
                </button>
                <button className="bg-red-500 p-3 rounded-full">
                    <Square size={25} />
                </button>
            </div>
        </div>
    );
};

export default TimeTrackerCard;