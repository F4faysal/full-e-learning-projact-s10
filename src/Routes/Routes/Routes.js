import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Page404 from "../../Pages/404/Page404";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/Courses',
                loader:  () =>  fetch('https://e-learning-servar-f4faysal.vercel.app/courses/'),
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
                
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'*',
                element: <Page404></Page404>
            },
           
        ]
    }
])