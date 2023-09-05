import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import TrashCard from "../components/TrashCard";
import AuthDetails from "../components/AuthDetails";
import Home from "../components/Home";

import {
    createBrowserRouter,
    
} from "react-router-dom";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <div><SignIn/></div>,
    },
    {
        path: "/signup",
        element: <div><SignUp/></div>,
    },
    {
        path: "/trashfinder",
        element: <div><TrashCard/></div>,
    },
    {
        path: "/home",
        element: <div><Home/></div>,
    },
    {
        path: "/authDetails",
        element: <div><AuthDetails/></div>,
    },
    
  ]);