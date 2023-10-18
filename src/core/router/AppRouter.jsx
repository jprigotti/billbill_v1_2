import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView"
import BookingView from "../../pages/booking/views/BookingView"
import GeneralLayout from "../layouts/GeneralLayout";
import BookingLayout from "../layouts/BookingLayout";

export const appRouter = createHashRouter([
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
            <BookingLayout>
                <BookingView />
            </BookingLayout>
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