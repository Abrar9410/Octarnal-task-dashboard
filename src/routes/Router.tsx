import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "register",
                element: <div>Register Page</div>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
        ]
    }
]);