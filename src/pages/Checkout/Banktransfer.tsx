import React from 'react'
import { useNavigate } from 'react-router-dom';

const Banktransfer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Pay by Banktransfer</h3>
            <div className='cart-container'>
                <div className='cart'>
                    <div className="cartItem">
                        <div className="logobank">
                            <img src='/images/vcb.jpg' />
                        </div>
                        <div className="thongtinbank">
                            <span>Ngân hàng thương mại cổ phần Ngoại thương Việt Nam</span>
                            <span>0381000519158</span>
                            <span>doan truc</span>
                        </div>
                    </div>
                </div>
            </div>
            <button id="purchase" onClick={() => navigate("/checkout")}>Back to Shipping</button>
            <button id="purchase" onClick={() => navigate("/paysuccessful")}>Finish</button>
        </div>
    )
}

export default Banktransfer