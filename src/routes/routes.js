import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUUND</div>,
        children: [
            {
                path: '/',
                loader: ()=> fetch(`http://localhost:5000/news`),
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Categories></Categories>
            },
            {
                path: '/news/:id',
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
        ]
    }
])