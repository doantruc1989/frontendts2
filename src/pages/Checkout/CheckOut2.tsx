import React, { useState, useEffect } from 'react'
import Navbar2 from '../../components/Navbar/Navbar2'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";
import axiosAll from '../../other/axiosAll'


const CheckOut2 = () => {
    const {
        items,
        cartTotal,
    } = useCart();
    const navigate = useNavigate();

    const userId = localStorage.hasOwnProperty('user') ? (JSON.parse(localStorage.getItem("user") || '{}')).id : '';
    const orderItems = JSON.stringify(items);

    const handleClick = () => {
        try {
            axiosAll.post('orderitem',
                JSON.stringify({ orderItems, cartTotal, userId }),
            );
            localStorage.removeItem('react-use-cart')
            navigate("/paysuccessful")
        } catch (error) {
            console.log(error)
        }
    }

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);

    useEffect(() => {
        toggleClass4()
    }, [])

    const toggleClass1 = () => {
        setActive1(!isActive1);
        setActive2(false)
        setActive3(false)
        setActive4(false)
    };
    const toggleClass2 = () => {
        setActive1(false)
        setActive2(!isActive2);
        setActive3(false)
        setActive4(false)
    };
    const toggleClass3 = () => {
        setActive1(false)
        setActive2(false)
        setActive4(false)
        setActive3(!isActive3);
    };
    const toggleClass4 = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(!isActive4);
    };
    // const USER_REGEX = /^[A-z]{3,23}$/;
    // const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

    // const [username, setUsername] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [email, setEmail] = useState('')
    // const [validEmail, setValidEmail] = useState(false);
    // const [provinces, setProvinces] = useState([]);
    // const [city, setCity] = useState();
    // const [zipcode, setZipcode] = useState();
    // const [states, setStates] = useState([])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(username));
    // }, [username])

    // useEffect(() => {
    //     setValidEmail(EMAIL_REGEX.test(email));
    // }, [email])

    // useEffect(() => {
    //     try {
    //         axiosAll.get('/api/provinces')
    //             .then((response) => {
    //                 setProvinces(response.data)
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    // useEffect(() => {
    //     try {
    //         axiosAll.get(`/api/provinces/${city}`)
    //             .then((response) => {
    //                 setZipcode(response.data.code)
    //                 setStates(JSON.parse(response.data.districts))
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [city])

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
                        <div className='payment-method'>
                            <h2>Payment method:</h2>
                            <div className='paymentdto'>
                                <div className={isActive1 ? 'radio selected' : 'radio'} onClick={toggleClass1}>
                                    <Link to='cod' className='link'>
                                        Pay COD
                                    </Link>
                                </div>
                                <div className={isActive2 ? 'radio selected' : 'radio'} onClick={toggleClass2}>
                                    <Link to='momo' className='link'>
                                        Pay by MoMo
                                    </Link>
                                </div>
                                <div className={isActive3 ? 'radio selected' : 'radio'} onClick={toggleClass3}>
                                    <Link to='banktrans' className='link'>
                                        Bank transfer
                                    </Link>
                                </div>
                                <div className={isActive4 ? 'radio selected' : 'radio'} onClick={toggleClass4} >
                                    <Link to='creditcard' className='link'>
                                        Credit Card
                                    </Link>
                                </div>
                            </div>
                            <Outlet />
                            <button id="purchase" onClick={() => navigate("/checkout")}>Back to Shipping</button>
                            <button id="purchase" onClick={handleClick}>Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut2