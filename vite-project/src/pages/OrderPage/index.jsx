import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import Navbar from '../../components/Navbar';
import OrderDeliveryCard from './OrderDeliveryCard';
import OrderPaymentCard from './OrderPaymentCard';
import OrderStatusCard from './OrderStatusCard';

const OrderPage = () => {
    const [orderList, setOrderList] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchOrderList()
    }, [])

    const fetchOrderList = async () => {
        console.log("주문목록 불러오는중");
        try {
            setIsLoading(true)
            const orderList = await fetch(`/api/order/list`).then((res) => res.json())
            setOrderList(orderList)
            console.log("주문목록 불러오기 성공");
        } catch(error) {
            console.log("주문목록 불러오기 실패", error);
        } finally {
            setIsLoading(false)
        }
        
    }

    return (
        <div className='OrderPage'>
            <Page
                header={<Title>주문내역</Title>}
                footer={<Navbar />}
            >
                { !orderList || orderList.length === 0 && ( 
                    <div style={{textAlign:"center"}}>
                        <h1>텅! 비어있음</h1>
                    </div>
                )}
                {orderList && !isLoading && (   
                    <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                        {orderList.map((order) => (
                            <li key={order.id}>
                                <>
                                    <OrderStatusCard order={order} />
                                    <OrderDeliveryCard order={order} />
                                    <OrderPaymentCard order={order} />
                                </>
                            </li>
                        ))}
                    </ul>

                )}
            </Page>
        </div>
    );
};

export default OrderPage;