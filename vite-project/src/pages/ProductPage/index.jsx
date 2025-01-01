import React, { useEffect, useState } from 'react';
import OrderableProductItem from './OrderableProductItem';
import Page from '../../components/Page';
import Title from '../../components/Title';
import Navbar from '../../components/Navbar';

const ProductPage = () => {

    const [productList, setProductList] = useState(null)

    useEffect(() => {
        fetchProductList()
    }, [])

    const fetchProductList = async () => {
        const productList = await fetch("/api/product/list").then((res) => res.json())
        setProductList(productList)
    }

    return (
        <div className='ProductPage'>
            <Page
                header={(<Title>메뉴목록</Title>)}
                footer={(<Navbar />)}
            >
                <ul>
                    {productList && productList.map((product) => (
                        <li key={product.id}>
                            <OrderableProductItem product={product} />
                        </li>
                    ))}
                </ul>
            </Page>
        </div>
    );
};

export default ProductPage;