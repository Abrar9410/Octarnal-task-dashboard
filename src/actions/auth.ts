import type { FieldValues } from "react-hook-form";


export const login = async (data: FieldValues) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    
    const loginInfo = await res.json();

    localStorage.setItem("token", loginInfo.token);

    return loginInfo;
};

export const logout = async () => {
    localStorage.removeItem("token");
};