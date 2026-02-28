import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { getProducts } from "../../../actions/dashboard";


export interface IProduct {
    id: number;
    name: string;
    price: number;
    sales: number;
    category: string;
};


const ProductsCard = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRes = await getProducts();
                setProducts(productsRes);
            } catch (error) {
                console.error("Error fetching products data:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="p-6 rounded-2xl shadow-sm bg-white flex-1">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold opacity-80">Products</h2>
                <button className="cursor-pointer flex justify-center items-center gap-1 bg-white border-2 border-[#1F7A4F] text-green-900 px-3 py-1.5 rounded-full font-semibold">
                    <Plus size={16} />
                    New
                </button>
            </div>

            {
                products.length > 0 ? products.map((product: IProduct) => (
                    <div key={product.sales + product.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-6 mt-6">

                            <img
                                src={`https://i.pravatar.cc/${50 + product.id}`}
                                alt={product.name}
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div className="leading-relaxed">
                                <p className="font-bold text-gray-900">
                                    {product.name}
                                </p>
                                <p className="text-sm text-gray-500 font-normal">
                                    Price: ${product.price} | Sales: {product.sales}
                                </p>
                            </div>

                        </div>
                        <div className={`px-1 py-0.5 rounded-full border text-xs ${product.category === "subscription" && "bg-yellow-100 border-yellow-500 text-yellow-500"} ${product.category === "addon" && "bg-green-100 border-green-500 text-green-500"}`}>
                            {product.category}
                        </div>
                    </div>
                )) : (
                    <p className="text-gray-500 mt-6">No products available</p>
                )
            }
        </div>
    );
};

export default ProductsCard;