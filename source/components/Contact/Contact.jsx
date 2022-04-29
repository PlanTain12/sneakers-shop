import React from 'react';

import  './contact.scss';

import Button from '../Button/Button.jsx';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Контактная информация:</h2>
            <div className="contact__form">
                <form action="/">
                    <input type="text" placeholder="Имя" />
                    <input type="tel" placeholder="Телефон" />
                    <input type="email" placeholder="Электронная почта" />
                    <textarea name="" id="" placeholder="Комметарий к заказу"></textarea>
                    <Button />
                </form>
            </div>
        </div>
    )
}


export default Contact;