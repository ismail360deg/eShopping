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



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
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
            {
                path: '/checkout',
                element: <Checkout></Checkout>
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
    }
    
])