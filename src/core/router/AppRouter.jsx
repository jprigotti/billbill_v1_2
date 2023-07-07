import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView"
import GeneralLayout from "../layouts/GeneralLayout";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomeView />
        ),
    },
]);

export const routes = [
    {
        name: "Home",
        to: "/",
    }
];