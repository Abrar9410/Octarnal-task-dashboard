import { Plus } from "lucide-react";


const ProductsCard = () => {
    return (
        <div className="p-6 rounded-2xl shadow-sm bg-white flex-1">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold opacity-80">Products</h2>
                <button className="cursor-pointer flex justify-center items-center gap-1 bg-white border-2 border-[#1F7A4F] text-green-900 px-3 py-1.5 rounded-full font-semibold">
                    <Plus size={16} />
                    New
                </button>
            </div>

            <div className="flex items-center gap-6 mt-6">

                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover"
                />

                <div className="leading-relaxed">
                    <p className="font-bold text-gray-900">
                        Totok Michael
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                        Join Date: Nov 26, 2024
                    </p>
                </div>

            </div>
            <div className="flex items-center gap-6 mt-6">

                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover"
                />

                <div className="leading-relaxed">
                    <p className="font-bold text-gray-900">
                        Totok Michael
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                        Join Date: Nov 26, 2024
                    </p>
                </div>

            </div>
            <div className="flex items-center gap-6 mt-6">

                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover"
                />

                <div className="leading-relaxed">
                    <p className="font-bold text-gray-900">
                        Totok Michael
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                        Join Date: Nov 26, 2024
                    </p>
                </div>

            </div>
            <div className="flex items-center gap-6 mt-6">

                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover"
                />

                <div className="leading-relaxed">
                    <p className="font-bold text-gray-900">
                        Totok Michael
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                        Join Date: Nov 26, 2024
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProductsCard;