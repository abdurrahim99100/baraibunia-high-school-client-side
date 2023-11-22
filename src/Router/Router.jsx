import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import EnrollClasses from "../Pages/EnrollClasses/EnrollClasses";
import PostNewClass from "../Pages/PostNewClass/PostNewClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "enrollClasses",
                element: <EnrollClasses />
            },
            {
                path: "postNewClass",
                element: <PostNewClass />
            },
            {
                path: "signUP",
                element: <SignUp />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },
]);