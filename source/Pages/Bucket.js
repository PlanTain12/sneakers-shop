import react from "react";

import Order from '../components/Order/Order.jsx'
import Contact from '../components/Contact/Contact.jsx'


function Bucket() {
    return <>
        <div className="bucket">
            <div className="bucket__container">
                <div className="bucket__del">
                    <Order />
                    <Contact />
                </div>
            </div>
        </div>
    </>
}

export default Bucket;