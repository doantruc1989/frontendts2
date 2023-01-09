

const Creditcard = () => {

    return (
        <div>
            <div className="paycreditcard">
                <h3>Pay by Credit card</h3>
                <img src="/images/visa.jpg" />
            </div>
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
        </div>
    )
}

export default Creditcard