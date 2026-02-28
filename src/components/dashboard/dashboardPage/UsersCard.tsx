import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getUsers } from "../../../actions/dashboard";


export interface IUser {
    id: number;
    name: string;
    email: string;
    status: string;
    joinDate: string;
};


const UsersCard = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRes = await getUsers();
                setUsers(usersRes);
            } catch (error) {
                console.error("Error fetching users data:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="p-6 rounded-2xl shadow-sm bg-white">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold opacity-80">Users</h2>
                <button className="cursor-pointer flex justify-center items-center gap-1 bg-white border-2 border-[#1F7A4F] text-green-900 px-3 py-1.5 rounded-full font-semibold">
                    <Plus size={16} />
                    New
                </button>
            </div>

            {
                users.length > 0 ? users.map((user: IUser) => (
                    <div key={user.id} className="flex items-center gap-6 mt-6">

                        <img
                            src={`https://i.pravatar.cc/${40 + user.id}`}
                            alt={user.name}
                            className="w-11 h-11 rounded-full object-cover"
                        />

                        <div className="leading-relaxed">
                            <p className="font-bold text-gray-900">
                                {user.name}
                            </p>
                            <p className="text-sm text-gray-500 font-normal">
                                Join Date: {new Date(user.joinDate).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </p>
                        </div>

                    </div>
                )) : <p className="text-center text-gray-500 mt-6">No users found.</p>
            }
        </div>
    );
};

export default UsersCard;