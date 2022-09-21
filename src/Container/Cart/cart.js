import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checktocart } from '../Redux/Action/Cart.action';
import { getdatapr } from '../../Container/Redux/Action/Pr_admin.action';

function cart(props) {

    const cartdata = useSelector(state => state.cart)
    const cart = cartdata.cart
    console.log(cart);

    const productdata = useSelector(state => state.product)
    const products = productdata.product
    console.log(products);

    const dispatch = useDispatch();

    const cartData = [];
    productdata.map((p) => {
        cartdata.map((c) => {
            if(p.id === c.id){
                cartData.push(p)
            }
        })
    })

    useEffect(
        () => {
            dispatch(getdatapr())
            dispatch(checktocart())
        },
        []
    )

    return (
        <>
            <div className="bread-crumb">
                <div className="container">
                    <div className="matter">
                        <h2>Shopping Cart</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                            <li className="list-inline-item"><a href="#">Shopping Cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default cart;