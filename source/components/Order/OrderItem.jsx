import React from 'react';

import I1 from '../../assets/1.jpg'

const OrderItem = () => {
    return (
                <div className="b-o__item i-o">
                    <div className="i-o__pic">
                        <img src={I1} alt="" />
                    </div>
                    <div className="i-o__sec si-o">
                        <div className="si-o__title">
                            <p>nike</p>
                            <p>10 000 руб</p>
                        </div>
                        <div className="si-o__button">
                            <button>убрать из заказа</button>
                        </div>
                    </div>
                </div>
    )
}


export default OrderItem;