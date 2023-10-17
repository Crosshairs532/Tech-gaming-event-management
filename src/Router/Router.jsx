
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Mainlayout/Root/Root';
import Error from '../Components/Error/Error';
import Home from '../Components/Home/Home';
import Events from '../Components/Event/Events';
import Login from '../Components/Login/Login';
import PrivateRoute from '../Privateroute/PrivateRoute';
import Register from '../Components/Register/Register';
import Details from '../Components/Details/Details';
import Discount from '../Components/Discounts/Discount';
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
        ,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/events',
                element: <PrivateRoute><Events></Events></PrivateRoute>
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
                path: '/service/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/discount',
                element: <PrivateRoute><Discount></Discount></PrivateRoute>
            }

        ]
    }

])


export default Router;