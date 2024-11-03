import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import './Navbar.css';

import logo from '../assets/images/logo.png';
import cart from '../assets/images/shopping-cart.png'; // Import icons

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='navlogo'>
                <img src={logo} alt="COF Logo" />
                <p>COF ONLINE SHOP</p>
            </div>
            <ul className='navmenu'>
                <li onClick={() => setMenu("Shop")}><Link to="/" > Shop</Link> {menu === "Shop" &&<hr/>}</li>
                <li onClick={() => setMenu("mens")}><Link to="/mens" > Men</Link> {menu === "mens" && <hr/>}</li>
                <li onClick={() => setMenu("womens")}><Link to="/womens" > Women</Link> {menu === "womens" && <hr/>}</li>
                <li onClick={() => setMenu("kids")}><Link to="/kids"> Kids</Link> {menu === "kids" && <hr/>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to= '/login'><button>Login</button></Link>
                <Link to='/checkout'><img src={cart} alt="Cart" /></Link> 
                <div className="nav-cart-count">0</div>
            </div>

            {/* Bottom bar for mobile view */}
            <div className='bottom-bar'>
                <div className={`tab ${menu === "shop" ? "active" : ""}`} onClick={() => setMenu("shop")}>
                    <span>Shop</span>
                </div>
                <div className={`tab ${menu === "mens" ? "active" : ""}`} onClick={() => setMenu("mens")}>
                    <span>Men</span>
                </div>
                <div className={`tab ${menu === "womens" ? "active" : ""}`} onClick={() => setMenu("womens")}>
                    <span>Women</span>
                </div>
                <div className={`tab ${menu === "kids" ? "active" : ""}`} onClick={() => setMenu("kids")}>
                    <span>Kids</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
