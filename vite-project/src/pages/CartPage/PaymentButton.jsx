import React from 'react';
import Button from '../../components/Button';

const PaymentButton = () => {
    return (
        <div className="PaymentButton">
            <Button
                styleType={"brand-solid"}
                block
                form ="order-form"
                style ={{padding: "12px 0"}}
            >
                결재하기
            </Button>
        </div>
    );
};

export default PaymentButton;