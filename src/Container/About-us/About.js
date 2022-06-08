import React, { Component } from 'react';


function About(props) {

    return (
        <>
            <div>
                {/* Breadcrumb Start */}
                <div className="bread-crumb">
                    <div className="container">
                        <div className="matter">
                            <h2>About Us</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="index.html">HOME</a></li>
                                <li className="list-inline-item"><a href="#">About us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb End */}

                <div className="about">
                    <div className="container">
                        <div className="row">
                            {/* Title Content Start */}
                            <div className="text-center py-5 text-uppercase">
                                <h4>about our restaurant food &amp; drinkes</h4>
                                <div className="divider style-1 left">
                                    <i className="icofont icofont-ui-press hr-icon left" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan.</p>
                                <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Fun-Factor Start */}
                <div className="fun-factor">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-3 col-6">
                                {/* Fun-Factor Box Start */}
                                <div className="single-box">
                                    <span>
                                        <i className="icofont icofont-spoon-and-fork" />
                                    </span>
                                    <h4 className="number" data-from={100} data-to={300} data-refresh-interval={10}>100</h4>
                                    <h3>MENU ITEMS</h3>
                                </div>
                                {/* Fun-Factor Box End */}
                            </div>
                            <div className="col-sm-3 col-6">
                                {/* Fun-Factor Box Start */}
                                <div className="single-box">
                                    <span>
                                        <i className="icofont icofont-emo-simple-smile" />
                                    </span>
                                    <h4 className="number" data-from={100} data-to={600} data-refresh-interval={10}>100</h4>
                                    <h3>VISITOR EVERYDAY</h3>
                                </div>
                                {/* Fun-Factor Box End */}
                            </div>
                            <div className="col-sm-3 col-6">
                                {/* Fun-Factor Box Start */}
                                <div className="single-box">
                                    <span>
                                        <i className="icofont icofont-waiter-alt" />
                                    </span>
                                    <h4 className="number" data-from={100} data-to={400} data-refresh-interval={10}>100</h4>
                                    <h3>EXPERT CHEF</h3>
                                </div>
                                {/* Fun-Factor Box End */}
                            </div>
                            <div className="col-sm-3 col-6">
                                {/* Fun-Factor Box Start */}
                                <div className="single-box">
                                    <span>
                                        <i className="icofont icofont-heart-alt" />
                                    </span>
                                    <h4 className="number" data-from={10} data-to={100} data-refresh-interval={10}>10</h4>
                                    <h3>TEST &amp; LOVE</h3>
                                </div>
                                {/* Fun-Factor Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fun-Factor End */}
                {/* Service Start  */}
                <div className="service">
                    <div className="container">
                        <div className="row ">
                            {/* Title Content Start */}
                            <div className="col-sm-12 col-xs-12 commontop text-center">
                                <h4>Why Choose Us ?</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla. </p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-sm-12 col-xs-12 video">
                                <img src="assets/images/about/about-bg.jpg" className="img-fluid" alt="image" title="image" />
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                {/*  Box Start  */}
                                <div className="box text-center">
                                    <span><i className="icofont icofont-waiter-alt" /></span>
                                    <h4>Best Chef</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae purus diam. Quisque vel elementum ligula.</p>
                                </div>
                                {/*  Box End  */}
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                {/*  Box Start  */}
                                <div className="box text-center">
                                    <span><i className="icofont icofont-dining-table" /></span>
                                    <h4>150 Tables</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae purus diam. Quisque vel elementum ligula.</p>
                                </div>
                                {/*  Box End  */}
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                {/*  Box Start  */}
                                <div className="box text-center">
                                    <span><i className="icofont icofont-recycling-man" /></span>
                                    <h4>Clean Environment</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae purus diam. Quisque vel elementum ligula.</p>
                                </div>
                                {/*  Box End  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End   */}
                {/* Team Start  */}
                <div className="team">
                    <div className="container">
                        <div className="row ">
                            {/* Title Content Start */}
                            <div className="col-sm-12 col-xs-12 commontop text-center">
                                <h4>Our Chefs</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla. </p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                {/* Box Start */}
                                <div className="box">
                                    <img src="assets/images/chefs/chefs-1.jpg" className="img-fluid" alt="chef" title="chef" />
                                    <div className="caption text-center">
                                        <h4>John Doe</h4>
                                        <ul className="list-inline social">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue. </p>
                                    </div>
                                </div>
                                {/* Box End */}
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                {/* Box Start */}
                                <div className="box">
                                    <img src="assets/images/chefs/chefs-2.jpg" className="img-fluid" alt="chef" title="chef" />
                                    <div className="caption text-center">
                                        <h4>John Doe</h4>
                                        <ul className="list-inline social">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue. </p>
                                    </div>
                                </div>
                                {/* Box End */}
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                {/* Box Start */}
                                <div className="box">
                                    <img src="assets/images/chefs/chefs-3.jpg" className="img-fluid" alt="chef" title="chef" />
                                    <div className="caption text-center">
                                        <h4>John Doe</h4>
                                        <ul className="list-inline social">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue. </p>
                                    </div>
                                </div>
                                {/* Box End */}
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                {/* Box Start */}
                                <div className="box">
                                    <img src="assets/images/chefs/chefs-2.jpg" className="img-fluid" alt="chef" title="chef" />
                                    <div className="caption text-center">
                                        <h4>John Doe</h4>
                                        <ul className="list-inline social">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue. </p>
                                    </div>
                                </div>
                                {/* Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End  */}
                {/* Testimonials Start  */}
                <div className="testimonials">
                    <div className="container">
                        <div className="testimonials-inner">
                            <div className="row ">
                                {/* Title Content Start */}
                                <div className="col-sm-12 col-xs-12 commontop white text-center">
                                    <h4>What Our Customers Say</h4>
                                    <div className="divider style-1 center">
                                        <span className="hr-simple left" />
                                        <i className="icofont icofont-ui-press hr-icon" />
                                        <span className="hr-simple right" />
                                    </div>
                                </div>
                                {/* Title Content End */}
                                <div className="col-sm-12 col-xs-12">
                                    <div className="owl-carousel owl-theme owl-testi">
                                        <div className="item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                                            <span>- Kapil Patel</span>
                                        </div>
                                        <div className="item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                                            <span>- Nicole Oliver</span>
                                        </div>
                                        <div className="item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                                            <span>- Brian Mills</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonials End  */}
                {/* Newsletter Start */}
                <div id="newsletter">
                    <div className="container">
                        <div id="subscribe">
                            {/* Subscribe Form */}
                            <form className="form-horizontal" name="subscribe">
                                <div className="row">
                                    <div className="col-sm-6 col-md-7">
                                        <div className="input-group">
                                            <span className="news">newsletter</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis lorem augue, at quam finibus eget.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5 form-group">
                                        <div className="input-group">
                                            <input defaultValue name="subscribe_email" id="subscribe_email" placeholder="Email" type="text" />
                                            <button className="btn btn-news" type="submit" value="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* Subscribe Form */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default About;