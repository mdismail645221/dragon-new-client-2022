import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import CategoryDetails from "../shared/CategoryDetails";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUUND</div>,
        children: [
            {
                path: '/',
                loader: ()=> fetch(`https://dragon-news-server-cyan-xi.vercel.app/news`),
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`https://dragon-news-server-cyan-xi.vercel.app/category/${params.id}`),
                element: <Categories></Categories>
            },
            {
                path: '/news/:id',
                loader: ({params})=> fetch(`https://dragon-news-server-cyan-xi.vercel.app//news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
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
                path: '/terms',
                element: <Terms></Terms>
            },
        ]
    }
])