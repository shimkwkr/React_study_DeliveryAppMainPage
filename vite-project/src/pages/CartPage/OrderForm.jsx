import React, { useRef } from 'react';
import FormControl from '../../components/FormControl';
import data from '../../mocks/data';

const OrderForm = ({onSubmit, productId}) => {
    const formRef = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(formRef.current)
        
        const formValues = Object.fromEntries(formData.entries())

        const deliveryAddress = formValues.deliveryAddress
        const deliveryContact = formValues.deliveryContact
        const paymentMethod = formValues.paymentMethod
        const messageToShop = formValues.messageToShop
        const messageToRider = formValues.messageToRider
        
        const product = data.products.find((product) => product.id === productId)

        onSubmit({
            id: productId,
            orderDate: new Date().toLocaleString('ko-KR'),
            status: "배달을 완료했어요",
            name: product.name,

            totalPrice: product.price + 3000 - 2000,
            paymentMethod: paymentMethod,
            productPrice: product.price,
            deliveryPrice: 3000,
            discountPrice: 2000,

            deliveryAddress: deliveryAddress,
            deliveryContact: deliveryContact,
            messageToShop: messageToShop,
            messageToRider: messageToRider,
        }); 
    }

    return (
        <div>
            <form className='OrderForm' ref={formRef} id="order-form" onSubmit={handleSubmit}>
                <FormControl
                    htmlFor="deliveryAddress"
                    label="주문"
                    required
                >
                    <input
                        type="text"
                        name="deliveryAddress"
                        id="deliveryAddress"
                        placeholder='배달받을 주소를 입력하세요'
                        required
                        autoFocus
                    />
                </FormControl>

                <FormControl
                    htmlFor="deliveryContact"
                    label="연락처"
                    required
                    pattern='^\d{2,3}-\d{3,4}-\d{4}$'
                >
                    <input
                        type="text"
                        name="deliveryContact"
                        id="deliveryContact"
                        placeholder='연락처를 입력하세요'
                        required
                    />
                </FormControl>

                <FormControl
                    htmlFor="paymentMethod"
                    label="결재수단"
                    required
                >
                    <select name="paymentMethod" id="paymentMethod">
                        <option value="마이페이">마이페이</option>
                        <option value="만나페이">만나페이</option>
                    </select>
                </FormControl>

                <FormControl
                    htmlFor="messageToShop"
                    label="가게 사장님께"
                >
                    <textarea
                        name="messageToShop"
                        id="messageToShop"
                    />
                </FormControl>

                <FormControl
                    htmlFor="messageToShop"
                    label="라이더님께"
                >
                    <textarea
                        name="messageToRider"
                        id="messageToRider"
                    />
                </FormControl>
            </form>

        </div>
    );
};

export default OrderForm;