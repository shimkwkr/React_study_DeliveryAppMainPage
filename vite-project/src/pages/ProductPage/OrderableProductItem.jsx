import React from 'react';
import ProductItem from '../../components/ProductItem';
import { useNavigate } from 'react-router-dom';

const OrderableProductItem = ({ product }) => {
    const navigate = useNavigate()
    
    const handleClick = (id) => {
        navigate(`/cart?productId=${id}`)
    }   

    return (
        <ProductItem product={product} onClick={handleClick}/>
    );
};

export default OrderableProductItem;