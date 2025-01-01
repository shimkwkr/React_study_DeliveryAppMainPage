import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaymentButton from './PaymentButton';
import ProductItem from '../../components/ProductItem';
import OrderForm from './OrderForm';

const CartPage = () => {
    const [cartList, setCartList] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [searchParams] = useSearchParams()
    const productId = searchParams.get('productId')
    const navigate = useNavigate()

    useEffect(() => {
        if (productId){
            fetchCartList(productId)
        }
    }, [productId])

    const fetchCartList = async (productId) => {
        console.log("장바구니 목록 로딩중");
        try {
            setIsLoading(true)
            const cartList = await fetch(`/api/product/${productId}`).then((res) => res.json())
            setCartList(cartList)
            console.log("장바구니 목록 로딩성공");
        } catch (error){            
            console.log("장바구니 목록 로딩실패", error);
        } finally {
            setIsLoading(false)
        }
    }
    // 주문목록 추가하기
    const createOrder = async (order) => {
        console.log("주문목록 추가중");
        try {
            setIsLoading(true)
            const response = await fetch("/api/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            if (response.status === 201) {
                const result = await response.json();
                console.log("주문목록 추가성공", result);
                return true;
            } else {
                console.log("주문목록 추가실패");
                return false;
            }
        } catch (error) {
            console.log("주문목록 추가실패", error)
            return false;
        } finally {
            setIsLoading(false)
        }
    } 

    const handleSubmit = async (order) => {

        const isSuccess = await createOrder(order)
        if (isSuccess) {
            console.log("주문내역 추가완료");
            navigate('/order')
        } else {
            alert('주문 처리 중 오류가 발생했습니다.')
        }
    }



    return (
        <div>
            <Page
                header={<Title backUrl={'/'}>장바구니</Title>}
                footer={<PaymentButton />}
            >
                {cartList && !isLoading && (
                    <>
                        <ProductItem product={cartList}/>
                        <OrderForm onSubmit={handleSubmit} productId={productId}/>
                    </>
                )}
            </Page>
        </div>
    );
};

export default CartPage;