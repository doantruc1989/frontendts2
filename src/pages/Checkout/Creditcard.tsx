import React from 'react'
import { useNavigate } from 'react-router-dom';

const Creditcard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Pay by Credit card</h3>
            <form>
                <label>Cardholder Name:</label>
                <div id="cardnumber">
                    <input type="text" />
                </div>
                <label>Card Number:</label>
                <div id="cardnumber">
                    <input type="number" />
                </div>
                <div className='creditcardexp'>
                    <div>
                        <label>Exp. Month:</label>
                        <div id="cardnumber">
                            <input type="number" />
                        </div>
                    </div>
                    <div>
                        <label>Exp. Year:</label>
                        <div id="cardnumber">
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <label>CVC Number:</label>
                <div id="cardnumber">
                    <input type="number" />
                </div>
            </form>
            <button id="purchase" onClick={() => navigate("/checkout")}>Back to Shipping</button>
            <button id="purchase" onClick={() => navigate("/paysuccessful")}>Finish</button>
        </div>
    )
}

export default Creditcard