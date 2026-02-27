import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";



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
]);