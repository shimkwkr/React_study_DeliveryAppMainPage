import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Title from '../../components/Title';

const OrderDeliveryCard = ({order}) => {
    return (
        <Card
            data={
                [
                    {term : "배달주소", description : order.deliveryAddress},
                    {term : "전화번호", description : order.deliveryContact},
                    {term : "가게사장님꼐", description : order.messageToShop},
                    {term : "라이더님께", description : order.messageToRider},
                ]
            }
        >

        </Card>
    );
};

export default OrderDeliveryCard;