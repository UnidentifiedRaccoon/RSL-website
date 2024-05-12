import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter';
import 'normalize.css';
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {BreedPage, ErrorPage, StepPage} from "./pages";
import {Provider} from "react-redux";
import {store} from "./features/store/store";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello</h1>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/breed",
        element: <BreedPage/>,
        children: [
            {
                path: 'module/:id',
                element: null,
            },
            {
                path: 'lecture/:id',
                element: null,
            },
        ],
    },
    {
        path: '/step/:id',
        element: <StepPage/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
