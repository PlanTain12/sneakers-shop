import React from 'react';

import  './order.scss';

import OrderItem from './OrderItem.jsx'

const Order = () => {
    return (
        <div className="order">
            <h2>Ваш заказ:</h2>

            <div className="order__block b-o">
                <OrderItem />
                <OrderItem />
            </div>

            <div className="order__summery">
                <p>Итого:</p>
                <p>20 000 руб</p>
            </div>
        </div>
    )
}


export default Order;