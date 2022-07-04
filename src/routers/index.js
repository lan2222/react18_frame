import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from '../component/login'


export default function index() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login></Login>} />
                </Routes>
            </BrowserRouter>  
        </>
    )
}
