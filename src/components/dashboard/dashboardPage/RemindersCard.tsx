import { Video } from "lucide-react";


const RemindersCard = () => {
    return (
        <div className="p-6 rounded-2xl shadow-sm bg-white flex flex-col justify-between h-full">
            <h2 className="text-lg font-semibold opacity-80">Reminders</h2>
            <p className="text-xl text-green-900 font-semibold mt-6">Meet with Arc Company</p>
            <p className="text-gray-500">Time: 02.00 pm - 04.00 pm</p>
            <button className="cursor-pointer w-full flex justify-center items-center gap-3 bg-linear-to-br from-green-900 to-[#1F7A4F] text-white text-lg px-5 py-2.5 rounded-full font-normal shadow-sm hover:opacity-90 transition mt-6">
                <Video size={20} />
                Start Meeting
            </button>
        </div>
    );
};

export default RemindersCard;