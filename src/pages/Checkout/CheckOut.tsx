import React, { useState, useEffect } from 'react'
import Navbar2 from '../../components/Navbar/Navbar2'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";
import axiosAll from '../../other/axiosAll'
import './checkout2.css'

const CheckOut = () => {
    const navigate = useNavigate();
    const {
        items,
        cartTotal
    } = useCart();
    // const USER_REGEX = /^[A-z]{3,23}$/;
    // const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

    // const [username, setUsername] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [email, setEmail] = useState('')
    // const [validEmail, setValidEmail] = useState(false);
    const [provinces, setProvinces] = useState([]);
    const [city, setCity] = useState();
    const [zipcode, setZipcode] = useState();
    const [states, setStates] = useState([])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(username));
    // }, [username])

    // useEffect(() => {
    //     setValidEmail(EMAIL_REGEX.test(email));
    // }, [email])

    useEffect(() => {
        try {
            axiosAll.get('/api/provinces')
                .then((response) => {
                    setProvinces(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            axiosAll.get(`/api/provinces/${city}`)
                .then((response) => {
                    setZipcode(response.data.code)
                    setStates(JSON.parse(response.data.districts))
                })
        } catch (error) {
            console.log(error)
        }
    }, [city])

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axiosAll.post('createUserPayment',
    //             JSON.stringify({ username, email })
    //         );
    //         localStorage.setItem("user", JSON.stringify(response?.data));
    //         console.log(JSON.stringify(response?.data));
    //         setUsername('');
    //         setEmail('');
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    return (
        <>
            <Navbar2 />
            <div className='checkout'>
                <div className='checkout-container'>
                    <div className="left-col">
                        <div className="left-col-cont">
                            <h2>Summary</h2>
                            {items.map((item) => (
                                <div className="item">
                                    <div className="img-col">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="meta-col">
                                        <h3>{item.productName} x {item.quantity}</h3>
                                        <p className="price">${item.price}</p>
                                    </div>
                                </div>
                            ))}
                            <p className="total">Total</p>
                            <h4 className="total-price"><span>$</span>{cartTotal}</h4>
                        </div>
                    </div>
                    <div className="right-col">
                        <h2>Shipping Address</h2>
                        <form >
                            <label>Full Name:</label>
                            <div id="cardnumber">
                                <input type="text" />
                            </div>
                            <label>Email:</label>
                            <div id="cardnumber">
                                <input type="email" />
                            </div>
                            <label>Address:</label>
                            <div id="cardnumber">
                                <input type="text" />
                            </div>
                            <label>Phone Number:</label>
                            <div id="cardnumber">
                                <input type="text" />
                            </div>
                            <label>City:</label>
                            <select value={city} onChange={(e: any) => setCity(e.target.value)}>
                                {provinces.map((province: any) => (
                                    <option value={province.name}>{province.name}</option>
                                ))}
                            </select>
                            <label>Zip Code:</label>
                            <select>
                                <option value={zipcode}>{zipcode}</option>
                            </select>
                            <label>State:</label>
                            <select>
                                {states.map((state: any) => (
                                    <option value={state.name}>{state.name}</option>
                                ))}
                            </select>
                            <label>Shipping Method:</label>
                            <div className='shipping'>
                                <div className='radio'>
                                    <input type="radio" value="Male" name="gender" />
                                    <label> Free Shipping (7 Day Ground) $0.00</label>
                                </div>
                                <div className='radio'>
                                    <input type="radio" value="Female" name="gender" />
                                    <label> Rapid Shipping (3 Day Ground) $10.00</label>
                                </div>
                                <div className='radio'>
                                    <input type="radio" value="Other" name="gender" />
                                    <label> Express Shipping (1.5 Day Ground) $20.00</label>
                                </div>
                                <div className='radio'>
                                    <input type="radio" value="Other2" name="gender" />
                                    <label> Now Delivery $30.00</label>
                                </div>

                            </div>
                            <button id="purchase" onClick={() => navigate("/checkout2")}>Next</button>
                            <p id="support">Having problem with checkout? <a href="#">Contact our support</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut