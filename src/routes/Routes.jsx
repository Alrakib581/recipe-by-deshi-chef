import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layouts/Main';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import RecipePage from '../pages/RecipePage/RecipePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/recipes/:id',
                element: <PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
                loader: ({params})=> fetch(`https://chefdata-rakib0157.vercel.app/chefdata/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;