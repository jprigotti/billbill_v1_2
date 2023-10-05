import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView"
import BookingView from "../../pages/booking/views/BookingView"
import GeneralLayout from "../layouts/GeneralLayout";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomeView />
        ),
    },
    {
        path: "/booking",
        element: (
                <BookingView />
        ),
    },
]);

// export const routes = [
//     {
//         name: "Home",
//         to: "/",
//     }
// ];