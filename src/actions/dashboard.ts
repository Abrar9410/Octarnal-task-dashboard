

export const getOverview = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/overview`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const overviewInfo = await res.json();

    return overviewInfo;
};

export const getAnalytics = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/analytics`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const overviewInfo = await res.json();

    return overviewInfo;
};

export const getUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const overviewInfo = await res.json();

    return overviewInfo;
};

export const getProducts = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    
    const res = await fetch(`${import.meta.env.VITE_BASE_API}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const overviewInfo = await res.json();

    return overviewInfo;
};