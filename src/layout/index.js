import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Nav from './nav';
import css from './layout.module.scss';

export default function Layout() {
    return (
        <div className={css.Layout}>

            <div className={css.Layout_Left}>
                <Nav className={css.Nav}></Nav>
            </div>

            <div className={css.Layout_Right}>
                <Header></Header>
                
                {/* <Suspense fallback={<div>loading...</div>}> */}
                    <div className={css.Main}>
                        <Outlet />
                    </div>
                {/* </Suspense> */}
            </div>
        </div>
        
    )
}
