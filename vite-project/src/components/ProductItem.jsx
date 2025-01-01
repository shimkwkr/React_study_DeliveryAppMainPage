import React from 'react';
import Button from './Button';

const ProductItem = ({ product, onClick }) => {
    const {id, name, price, thumbnail} = product

    return (
        <div className='ProductItem'>
            <div className='description'>
                <h2>{name}</h2>
                <p>{price.toLocaleString()}원</p>
                {onClick && (
                    <Button styleType={'brand'} onClick={() => onClick(id)}>주문하기</Button>
                )}
            </div>
            <div className='thumbnail'>
                <img src={thumbnail} alt={name} />
            </div>
        </div>
    );
};

export default ProductItem;