import React from 'react';

function cart(props) {
    return (
        <div>
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
            {/* Breadcrumb End */}
            
            {/* Cart Start  */}
            <div className="mycart">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a className="nav-link active" href="#tab-cart" data-toggle="tab"><span>1</span>shopping cart</a></li>
                                <li className="nav-item"><a className="nav-link" href="#tab-info" data-toggle="tab"><span>2</span>shopping info</a></li>
                                <li className="nav-item"><a className="nav-link" href="#tab-payment" data-toggle="tab"><span>3</span>payment method</a></li>
                            </ul>
                            <div className="bor" />
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab-cart">
                                    <form method="post" encType="multipart/form-data">
                                        <h2>You have <span>2 items</span> in your order.</h2>
                                        <div className="table-responsive-md">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td className="text-center">Name</td>
                                                        <td className="text-center">Price</td>
                                                        <td className="text-center">Qty.</td>
                                                        <td className="text-center">Total</td>
                                                        <td />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="#">
                                                                <img src="assets/images/our-menu/01.jpg" className="img-fluid" alt="thumb" title="thumb" />
                                                            </a>
                                                            <div className="name">
                                                                <h4>Food Title Here</h4>
                                                                <p>Curses / Dictum / Risus</p>
                                                                <div className="rating">
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">$ 23.00</td>
                                                        <td className="text-center">
                                                            <p className="qtypara">
                                                                <span id="minus1" className="minus"><i className="icofont icofont-minus" /></span>
                                                                <input type="text" name="quantity" defaultValue={1} size={2} id="input-quantity1" className="form-control qty" />
                                                                <span id="add1" className="add"><i className="icofont icofont-plus" /></span>
                                                                <input type="hidden" name="product_id" defaultValue={1} />
                                                            </p>
                                                        </td>
                                                        <td className="text-center">$23.00</td>
                                                        <td className="text-center">
                                                            <button type="button"><i className="icofont icofont-close-line" /></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="#">
                                                                <img src="assets/images/our-menu/01.jpg" className="img-fluid" alt="thumb" title="thumb" />
                                                            </a>
                                                            <div className="name">
                                                                <h4>Food Title Here</h4>
                                                                <p>Curses / Dictum / Risus</p>
                                                                <div className="rating">
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                    <i className="icofont icofont-star" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">$23.50</td>
                                                        <td className="text-center">
                                                            <p className="qtypara">
                                                                <span id="minus2" className="minus"><i className="icofont icofont-minus" /></span>
                                                                <input type="text" name="quantity" defaultValue={1} size={2} id="input-quantity2" className="form-control qty" />
                                                                <span id="add2" className="add"><i className="icofont icofont-plus" /></span>
                                                                <input type="hidden" name="product_id" defaultValue={1} />
                                                            </p>
                                                        </td>
                                                        <td className="text-center">$23.50</td>
                                                        <td className="text-center">
                                                            <button type="button"><i className="icofont icofont-close-line" /></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={5}>
                                                            <h3 className="text-right">SUBTOTAL - $46.50</h3>
                                                            <div className="buttons float-left">
                                                                <a href="shop.html" className="btn btn-theme btn-md btn-wide">Continue Shopping</a>
                                                            </div>
                                                            <div className="buttons float-right">
                                                                <a href="#tab-info" data-toggle="tab" className="btn btn-theme btn-md btn-wide">Checkout</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane col-md-12 col-12" id="tab-info">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-12">
                                            <h6>Shopping Address</h6>
                                            <form method="post" encType="multipart/form-data">
                                                <fieldset>
                                                    <div className="form-group">
                                                        <input name="india" defaultValue placeholder="Country" id="input-india" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="state" defaultValue placeholder="State" id="input-state" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="City" defaultValue placeholder="City" id="input-City" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="code" defaultValue placeholder="Zip Code" id="input-code" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="address" defaultValue placeholder="Address" id="input-address" className="form-control" type="text" />
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block" />
                                        <div className="col-lg-5 col-md-6 col-12">
                                            <h6>Contact information</h6>
                                            <form method="post" encType="multipart/form-data">
                                                <fieldset>
                                                    <div className="form-group">
                                                        <input name="firstname" defaultValue placeholder="First Name" id="input-firstname" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="lastname" defaultValue placeholder="Last Name" id="input-lastname" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="email" defaultValue placeholder="Email" id="input-email" className="form-control" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input name="phone" defaultValue placeholder="Phone Number" id="input-phone" className="form-control" type="text" />
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <div className="buttons float-left">
                                                <a href="#tab-cart" data-toggle="tab" className="btn btn-theme btn-md btn-wide">Shopping Cart</a>
                                            </div>
                                            <div className="buttons float-right">
                                                <a href="#tab-payment" data-toggle="tab" className="btn btn-theme btn-md btn-wide">Continue</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane col-md-12 col-12" id="tab-payment">
                                    <form className="form-horizontal" method="post">
                                        <fieldset>
                                            <div className="form-group ">
                                                <ul className="list-inline text-center link">
                                                    <li className="list-inline-item active">
                                                        <a href="#"><img src="assets/images/shop/visacard.png" alt="visa" title="visa" className="img-fluid" /></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#"><img src="assets/images/shop/master.png" alt="master" title="master" className="img-fluid" /></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#"><img src="assets/images/shop/discovers.png" alt="discover" title="discover" className="img-fluid" /></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#"><img src="assets/images/shop/pay.png" alt="paypal" title="paypal" className="img-fluid" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="input-card" placeholder="Card Holder Name" defaultValue name="holder" required type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="input-expiry" placeholder="Card Number" defaultValue name="card" required type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label>Expiry Date</label>
                                                <div className="col-sm-4">
                                                    <input className="form-control" placeholder="Month" defaultValue name="month" required type="text" />
                                                </div>
                                                <div className="col-sm-4">
                                                    <input className="form-control" placeholder="Year" defaultValue name="Year" required type="text" />
                                                </div>
                                                <div className="col-sm-4">
                                                    <input className="form-control" id="input-cvv" placeholder="cvv" defaultValue name="cvv" required type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12 col-12 text-center">
                                                    <div className="buttons">
                                                        <a href="#tab-cart" data-toggle="tab" className="btn btn-theme btn-md btn-wide">Shopping Cart</a>
                                                        <a href="thank-you.html" className="btn btn-theme btn-md btn-wide">Place Order</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart End  */}
        </div>

    );
}

export default cart;