import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { find } from 'lodash';
import MenuList from '@/routers/config.js';
import css from '../layout.module.scss';

const Nav = memo(() => {
    
    const rootMenu = find(MenuList,{path:'/'}).children;

    const createMenu = (menu=[], parentRoot) => {
        // console.log(parentRoot, 'parentRoot');
        return menu.map((item) => {
            // console.log(item, 'item')
            if (item.children) {
                return (
                    <Menu.SubMenu key={Math.random()} title={item.title}>
                        {createMenu(item.children, parentRoot+'/'+item.path)}
                    </Menu.SubMenu>
                )
            } else {
                return (<Menu.Item key={Math.random()}>
                    <Link to={(parentRoot + '/' + item.path).replaceAll('//','/')}>{item.title}</Link>
                </Menu.Item>)  
            }
        })
    }
    
    return (
        <div>
            <div className={css.logo}></div>
            <Menu mode="inline">
                {createMenu(rootMenu, '')}
            </Menu>
            {/* <Link to='/home'>Home</Link>
            <Link to='/list'>List</Link>
            <Link to='/login'>Login</Link> */}
        </div>
    )
})

export default Nav