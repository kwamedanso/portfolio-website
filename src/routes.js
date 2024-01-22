import Resume from "pages/Resume";
import Home from "pages/Home"
import NotFound from "pages/NotFound";


const privateRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/resume",
        element: <Resume />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default privateRoutes;