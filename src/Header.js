import React from 'react';
import './header.css';
import Logo from './robinhood-logo.svg';

function Header() {
    return (

        <div className="header__wrapper">
            <div className="header__logo">
                <img src={Logo} width={25} alt="Logo" />
            </div>
            <div className="header__search">
                <div className="header__searchContainer"> 
                    <input placeholder="Search" type="text"></input>
                </div>
            </div>
            <div className="header__menuItems">
                <a href="https"> Free Stocks</a>
                <a href="https"> Portfolio</a>
                <a href="https"> Cash</a>
                <a href="https"> Messages</a>
                <a href="https"> Account</a>
            </div>
             
             
            
        </div>
    )
}

export default Header;
