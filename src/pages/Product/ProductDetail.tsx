import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAll from '../../other/axiosAll';
import './productDetail.css';
import Navbar2 from '../../components/Navbar/Navbar2'
import { useCart } from 'react-use-cart'
import { products } from '../../other/model'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = () => {
    const { productId } = useParams();
    const { addItem }: any = useCart();
    const [products, setProducts] = useState<products>([] as any)

    useEffect(() => {
        try {
            axiosAll.get(`product/${productId}`)
                .then((response) => {
                    setProducts(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <section >
            <Navbar2 />
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className='product-image'>
                            <img src={products.image} alt={products.productName} id="product-main-image" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product">
                            <div className="product-title">
                                <h2>{products.productName}</h2>
                            </div>
                            <div className="product-price">
                                <span className="offer-price">$ {products.price}</span>
                                <span className="sale-price">$ 11</span>
                            </div>
                            <div className="product-details">
                                <h3>Description</h3>
                                <p>{products.content}</p>
                            </div>
                            <span className="divider"></span>
                            <div className="icons">
                                <a className="fas fa-shopping-cart" onClick={() => {
                                    addItem(products)
                                    toast("Add product successfully", {
                                        position: toast.POSITION.BOTTOM_RIGHT,
                                        type: toast.TYPE.SUCCESS,
                                        className: 'toast-message'
                                    })
                                }}></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetail