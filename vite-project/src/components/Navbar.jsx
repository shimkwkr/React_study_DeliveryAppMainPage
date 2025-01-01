import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const Navbar = () => {
    const isProductPage = useMatch("/")
    const isOrderPage = useMatch("/order")

    return (
        <div className='Navbar'>
            <Link to="/"className={isProductPage ? "active" : ""}> 메뉴목록</Link>
            <Link to="/order"className={isOrderPage ? "active" : ""}> 주문내역</Link>
        </div>
    );
};

export default Navbar;