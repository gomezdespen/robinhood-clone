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
            <div className="header__menueItems">
                <a href="#"> Free Stocks</a>
                <a href="#"> Portfolio</a>
                <a href="#"> Cash</a>
                <a href="#"> Messages</a>
                <a href="#"> Account</a>
            </div>
             
             
            
        </div>
    )
}

export default Header;
