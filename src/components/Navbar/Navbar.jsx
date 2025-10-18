import React, { useState } from "react";
import styled from 'styled-components';
import { assets } from "../../assets/assets";

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
    
    return(
        <NavbarContainer id="navbar">
            <img src={assets.logo} alt="" className="logo" />

            <ul className="navbar-menu">
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active":""}>Home</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active":""}>Menu</li>
                <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active":""}>Mobile-App</li>
                <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active": ""}>Contact Us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />

                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>

                <button>Sign In</button>
            </div>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        width: 150px;
    }

    .navbar-menu{
        display: flex;
        list-style: none;
        gap: 20px;
        color: #3b53a2;
        font-size: 18px;
    }

    .navbar-right{
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .navbar-right button{
        background: transparent;
        color: #3b53a2;
        font-size: 16px;
        border: 1px solid tomato;
        padding: 10px 30px;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;
    }
    .navbar-right button:hover{
        background-color: #fff4f2;
    }

    .active{
        padding-bottom: 2px;
        border-bottom: 2px solid #3b53a2;
    }

    .navbar-menu li{
        cursor: pointer;
    }

    .navbar-search-icon{
        position: relative;
    }

    .navbar-search-icon .dot{
        position: absolute;
        min-height: 10px;
        min-width: 10px;
        background-color: tomato;
        border-radius: 5px;
        top: -8px;
        right: -8px;
    }
    
`;