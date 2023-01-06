import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cod = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>Pay by COD</h3>

            <button id="purchase" onClick={() => navigate("/checkout")}>Back to Shipping</button>
            <button id="purchase" onClick={() => navigate("/paysuccessful")}>Finish</button>
        </>
    )
}

export default Cod