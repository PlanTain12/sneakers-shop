import react from "react";
import './footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <Link to="/" className="footer__logo">Sneakers</Link>
            <a href="https://github.com/PlanTain12/sneakers-shop" className="footer__github">PlanTain12 (2022)</a>
        </footer>
    )
}

export default Footer;