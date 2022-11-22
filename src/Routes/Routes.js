import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Teams from "../Pages/Teams/Teams";

const router = createBrowserRouter([
    {
        path: '',
        element: <Main></Main>,
        children: [
            {
                path: '',
                element: <Home></Home>,
                loader: () => fetch('data/milestone.json')

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/teams',
                element: <Teams></Teams>,
                loader: () => fetch('data/teams.json')
            },
        ]
    }
])

export default router