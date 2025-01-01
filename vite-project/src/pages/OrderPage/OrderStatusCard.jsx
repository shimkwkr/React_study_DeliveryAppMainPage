import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Card from '../../components/Card';

const OrderStatusCard = ({order}) => {
    return (
        <Card
            header={(
                <>
                    <strong>음식 준비중</strong>
                    <br />
                    <span>{order.name}</span>
                </>
            )}
            footer={(
                <>
                    <Button>전화</Button>
                    <Button>가게보기</Button>
                </>
            )}
            data={
                [
                    {term: "주문일시", description: order.orderDate },
                    {term: "주문번호", description: order.id },
                ]
            }
        >
        </Card>
    );
};

export default OrderStatusCard;