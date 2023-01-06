import React from 'react'
import { useNavigate } from 'react-router-dom';

const Momo = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>Pay by Momo</h3>
            <div className='momo'>
                <img src="/images/momo.jpg" alt="" />

            </div>
            <button id="purchase" onClick={() => navigate("/checkout")}>Back to Shipping</button>
            <button id="purchase" onClick={() => navigate("/paysuccessful")}>Finish</button>
        </>
    )
}

export default Momo