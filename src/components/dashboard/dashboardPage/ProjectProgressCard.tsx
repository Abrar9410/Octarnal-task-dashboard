

const ProjectProgressCard = () => {
    const progress = 74;

    const radius = 150;
    const stroke = 60;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * Math.PI;

    const strokeDashoffset =
        circumference - (progress / 100) * circumference;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm w-full h-full max-w-md">
            <h3 className="text-lg font-semibold mb-13">
                Project Progress
            </h3>

            <div className="flex justify-center items-center relative">
                <svg
                    height={radius}
                    width={radius * 2}
                    className="overflow-visible"
                >
                    {/* Background Arc */}
                    <path
                        d={`
              M ${stroke / 2} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 
              ${radius * 2 - stroke / 2} ${radius}
            `}
                        fill="transparent"
                        stroke="#E5E7EB"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                    />

                    {/* Progress Arc */}
                    <path
                        d={`
              M ${stroke / 2} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 
              ${radius * 2 - stroke / 2} ${radius}
            `}
                        fill="transparent"
                        stroke="#166534"
                        strokeWidth={stroke}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-700"
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute flex flex-col items-center top-23">
                    <span className="text-6xl font-bold text-gray-800">
                        {progress}%
                    </span>
                    <span className="text-green-800">
                        Project Ended
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-16">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-800" />
                    <span className="text-green-800">
                        Completed
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E5E7EB]" />
                    <span className="text-gray-500">
                        Pending
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgressCard;