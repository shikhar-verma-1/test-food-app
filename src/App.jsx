import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
//import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantPage from './components/RestaurantPage';
//import Grocery from './components/Grocery';
import {lazy,Suspense} from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const Grocery = lazy(()=>import('./components/Grocery'))
const AboutUs = lazy(()=>import('./components/AboutUs'))

const Applayout = () => {

   

    return(
       <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />

            </div>
        </Provider>
       
    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <Applayout />,
        children : [
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/about',
                element : <Suspense fallback={"nigga bitches"}><AboutUs /></Suspense>
            },
            {
                path : '/contact',
                element : <ContactUs/>
            },
            {
                path : '/restaurants/:resId',
                element: <RestaurantPage/>
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
            
        ],

        errorElement : <Error/>

        
    }
   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)