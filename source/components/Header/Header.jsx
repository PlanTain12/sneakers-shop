import react from "react";
import './header.scss'
import { Link, Route, Routes } from "react-router-dom";
import Filter from "./Filter";
import Menu from "./Menu";

const Header = () => {

    return (
        <header className="header">
            <div className="header__main-part hm-p">
                <Link to="/" className="hm-p__logo">Sneakers</Link>
                <div className="hm-p__shopping-card">
                    <Link to="/bucket">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 3.33331H6.23351C8.03351 3.33331 9.45017 4.88331 9.30017 6.66665L7.91683 23.2666C7.6835 25.9833 9.83349 28.3166 12.5668 28.3166H30.3168C32.7168 28.3166 34.8168 26.35 35.0002 23.9667L35.9002 11.4667C36.1002 8.69999 34.0002 6.44997 31.2168 6.44997H9.70018" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.0833 36.6667C28.2339 36.6667 29.1667 35.7339 29.1667 34.5833C29.1667 33.4327 28.2339 32.5 27.0833 32.5C25.9327 32.5 25 33.4327 25 34.5833C25 35.7339 25.9327 36.6667 27.0833 36.6667Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.7498 36.6667C14.9004 36.6667 15.8332 35.7339 15.8332 34.5833C15.8332 33.4327 14.9004 32.5 13.7498 32.5C12.5992 32.5 11.6665 33.4327 11.6665 34.5833C11.6665 35.7339 12.5992 36.6667 13.7498 36.6667Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 13.3333H35" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
                <div className="header__second-part-t1 hs-p1">
                    <Menu items={['sdvds', 'dsvsdvsdv', 'dvsdavdv']} />
                    <Filter items={[{name: 'Популярные', type: 'popular'}, {name: 'Цена', type: 'price'}, {name: 'Дата', type: 'data'}]} />
                </div>
                <div className="header__second-part-t1 hs-p2">
                    <h1>Корзина</h1>
                </div>
        </header>
    )
}

export default Header;