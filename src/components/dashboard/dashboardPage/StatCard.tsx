import { MoveUpRight } from "lucide-react";



interface IStatCardProps {
    title: string;
    value: number;
    highlighted?: boolean;
    children?: React.ReactNode;
};


const StatCard = ({title, value, highlighted = false, children}: IStatCardProps) => {
    return (
        <div
            className={`p-6 rounded-2xl shadow-sm ${highlighted
                    ? "bg-linear-to-b from-green-900 to-lime-700 text-white"
                    : "bg-white text-gray-900"
                }`}
        >
            <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-lg font-semibold opacity-80">{title}</p>
                <div className="p-3 w-max aspect-square bg-white border border-gray-500 rounded-full">
                    <MoveUpRight className="text-gray-500" size={16} />
                </div>
            </div>
            <h3 className="text-4xl font-bold">{value}</h3>
            {children}
        </div>
    );
};

export default StatCard;