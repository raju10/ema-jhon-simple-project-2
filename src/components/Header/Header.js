import React from 'react';
import img from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
           <img src={img} alt=""/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order Review</a>
               <a href="/iventory">Manage invortary Here</a>
           </nav>
        </div>
    );
};

export default Header;