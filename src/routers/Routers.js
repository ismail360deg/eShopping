import React from 'react';

import { createBrowserRouter} from 'react-router-dom';

import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import ProductDetails from '../Pages/ProductDetails';
import Checkout from '../Pages/Checkout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Main from '../components/Layout/Main';
import ProtectedRoute from './ProtectedRoute';

import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/shop/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },

            // {
            //     path: '/*',
            //     element: <ProtectedRoute></ProtectedRoute>
            // },

            {
                path: '/checkout',
                element: <ProtectedRoute><Checkout></Checkout></ProtectedRoute>
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>
            },
            {
                path: '/dashboard/all-products',
                element: <ProtectedRoute><AllProducts></AllProducts></ProtectedRoute>
            },
            {
                path: '/dashboard/add-products',
                element: <ProtectedRoute><AddProducts></AddProducts></ProtectedRoute>
            },
            {
                path: '/dashboard/users',
                element: <ProtectedRoute><Users></Users></ProtectedRoute>
            },


            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Signup></Signup>
            },

        ]
    },
    // {
        
    //     path: '/',
    //     element: <ProtectedRoute></ProtectedRoute>,
    //     children: [
    //     {
    //         path: '/checkout',
    //         element: <Checkout></Checkout>
    //     },
    //     {
    //         path: '/dashboard',
    //         element: <Dashboard></Dashboard>
    //     },
    //     {
    //         path: '/dashboard/all-products',
    //         element: <AllProducts></AllProducts>
    //     },
    //     {
    //         path: '/dashboard/add-products',
    //         element: <AddProducts></AddProducts>
    //     },
    //    ]
    // }
    
])