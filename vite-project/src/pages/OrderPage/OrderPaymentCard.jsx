import React from 'react';
import Card from '../../components/Card';

const OrderPaymentCard = ({order}) => {
    return (
        <Card
            header={(
              <>
                총 결재 금액 : {order.totalPrice}
                <br />
                결제 방법: {order.paymentMethod}
              </>  
            )}
            data={
                [
                    {term: "메뉴가격", description: `${order.productPrice.toLocaleString()}원`},
                    {term: "배달료", description: `${order.deliveryPrice.toLocaleString()}원`},
                    {term: "할인금액", description: `${order.discountPrice.toLocaleString()}원`},
                ]
            }
        >

        </Card>
    );
};

export default OrderPaymentCard;