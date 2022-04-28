import react from "react";
import './item.scss';
import Img1 from '../../assets/1.jpg';


const Item = () => {

    return (
        <div className="item">
            <div className="item__pic">
                <img src={Img1} alt="" />
            </div>
            <span></span>
            <div className="item__title">
                <p>addidas</p>
                <p>10 000 руб</p>
            </div>
            <div className="item__button">
                <button>в корзину</button>
            </div>
        </div>
    )
}

export default Item;