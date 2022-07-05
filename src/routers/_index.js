import React, { lazy, useEffect, Suspense } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
const Home = lazy(() => { return import('../component/home') });
const List = lazy(() => { return import('../component/list') });
const Layout = lazy(() => { return import('../layout') });
const Login = lazy(() => { return import('../component/login') });

export default function Index() {

    // const currentMenus = () => {
    //     let currentMenu;

    // }

    useEffect(() => {
        console.log('2223333')
    }, [])
    
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='home' element={<Home />} />
                        <Route path='list' element={<List />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                </Routes>
                </Suspense>
            </BrowserRouter>  
        </>
    )
}
