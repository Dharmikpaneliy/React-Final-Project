import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addtocart } from '../Container/Redux/Action/Cart.action';

function Productdetails(props) {

    const productval = [props.location.state]
    const dispatch = useDispatch()
    const history = useHistory()

    const handlecart = (d) => {
        dispatch(addtocart(d))
        history.push("/cart")
    }

    return (
        <div>
            {
                productval.map((d) => {
                    return (
                        <>
                            <div className="bread-crumb">
                                <div className="container">
                                    <div className="matter">
                                        <h2>Product Details</h2>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                                            <li className="list-inline-item"><a href="#">Product Details</a></li>
                                        </ul>
                                    </div>  
                                </div>
                            </div>


                            <section className='mt-5 mb-5'>
                                <div className="container">
                                    <div className='row align-items-center justify-content-center'>
                                        <div className="col-sm-4">
                                            <div className="product-images">
                                                <img src={d.file} alt="image" className='img-fluid' width="50%" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="product-details">
                                                <h4 className="product-name lh-base mb-3">{d.name}</h4>
                                                <h5 className="product-desc lh-base fw-normal mb-3">{d.desc}</h5>
                                                <p className="product-price fw-bold mb-3">Price :{d.price}</p>
                                                <div className='d-flex'>
                                                    <div className=''>  
                                                        <button href="#" className="border border-ra bg-dark text-white" >Buy Now</button>
                                                    </div>
                                                    <div className=''>
                                                        <button href="#" className="border border-ra bg-dark text-white mx-3" onClick={() => { handlecart(d) }}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Productdetails;