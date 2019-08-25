import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinkMenu = () => {
    
    const activeStyle = {
        color : 'green',
        fontSize : '2rem'
    }

    return (
        <div>
            <ul>
                <li><NavLink exact to = '/' activeStyle ={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to = '/About'> About </NavLink> </li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
            </ul>
        </div>
    )
}

export default NavLinkMenu;
