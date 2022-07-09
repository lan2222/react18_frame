// import { lazy } from 'react'
// const Home = lazy(() => { return import('../component/home') });
// const List = lazy(() => { return import('../component/list') });
// const Layout = lazy(() => { return import('../layout') });
// const Login = lazy(() => { return import('../component/login') });
import Home from '../component/home';
import Other from '../component/home/other';
import List from '../component/list';
import Layout from '../layout';
import Login from '../component/login';
import Screen from '../component/screen';
import ScreenSummary from '../component/screen/xqzl';


const Menu = [
    {
        path: '/',
        title: 'Index',
        element: <Layout />,
        children: [
            {
                path: 'home',
                title: 'Home',
                // element: <Home/>,
                children: [
                    {
                        path: '',
                        title: 'Home-A',
                        // element: <Home />
                        children: [
                            {
                                path:'a',
                                title: 'test-a',
                                element: <Home />
                            }
                        ]
                    },{
                        path: 'b',
                        title: 'Home-B',
                        element: <Other />
                    }
                    
                ]
            },
            {
                path: 'list',
                title: 'List',
                element: <List/>
            },
            {
                title: 'Screen',
                redirect: '/summary',
            },
        ]
    },{
        path: '/login',
        title: 'Title',
        element: <Login />,
        isMenu: false,
    },{
        path: '/screen',
        title: 'Screen',
        element: <Screen />,
        isMenu: false,
    },{
        path: '/summary',
        title: 'Summary',
        element: <ScreenSummary />,
        isMenu: false,
    }
    
]




export default Menu;