import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView"
import BookingView from "../../pages/booking/views/BookingView"
import GeneralLayout from "../layouts/GeneralLayout";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <HomeView />
            </GeneralLayout>

        ),
    },
    {
        path: "/booking",
        element: (
            <GeneralLayout>
                <BookingView />
            </GeneralLayout>
        ),
    },
]);

export const routes = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Booking",
        to: "/booking"
    }
];