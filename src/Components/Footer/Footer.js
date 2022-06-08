import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row inner">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            {/* Footer Widget Start */}
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled contact">
                                <li><i className="icofont icofont-social-google-map" /> 20, floor, Restaurant Food &amp; Drinks, Nr, Queenslad Victoria Building, USA</li>
                                <li><i className="icofont icofont-phone" /> 1800 000 0000,<br />+88 123 1234 1234</li>
                                <li><a href="#"><i className="icofont icofont-ui-message" />info@yourdomainname.com</a></li>
                            </ul>
                            {/* Footer Widget End */}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            {/* Footer Widget Start */}
                            <h5>Information</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                            {/* Footer Widget End */}
                        </div>
                        <div className="w-100 d-none d-xs-block" />
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            {/* Footer Widget Start */}
                            <h5>Open Hours</h5>
                            <ul className="list-unstyled">
                                <li>Monday - Friday : 9 am to 12 am.</li>
                                <li>Saturday - Sunday : 24 Hour Open</li>
                                <li>Breakfast : 7 am to 12 pm</li>
                                <li>Lunch : 12 pm to 7 pm</li>
                                <li>Dinner : 7 am to 12 am</li>
                            </ul>
                            {/* Footer Widget End */}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            {/* Footer Widget Start */}
                            <h5>Instagram</h5>
                            <ul className="list-unstyled insta">
                                <li><a href="#"><img src="assets/images/instagram/1.jpg" alt="image" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/2.jpg" alt="image" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/3.jpg" alt="image" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/4.jpg" alt="image" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/5.jpg" alt="image" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/6.jpg" alt="image" /></a></li>
                            </ul>
                            {/* Footer Widget End */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row powered">
                            {/*  Copyright Start */}
                            <div className="col-md-3 col-sm-6 order-md-1">
                                <img src="assets/images/logo/logo-white.png" className="img-fluid" title="logo" alt="logo" />
                            </div>
                            <div className="col-md-3 col-sm-6 text-right order-md-3">
                                {/*  Footer Social Start */}
                                <ul className="list-inline social">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/spheretheme/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/spheretheme/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                    <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                    <li className="list-inline-item"><a href="https://in.pinterest.com/" target="_blank"><i className="icofont icofont-social-pinterest" /></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                    <li className="list-inline-item"><a href="https://www.youtube.com/" target="_blank"><i className="icofont icofont-social-youtube-play" /></a></li>
                                </ul>
                                {/*  Footer Social End */}
                            </div>
                            <div className="col-md-6 col-sm-12 text-center order-md-2">
                                <p>Copyright © <span>Steam Restaurant &amp; Drinks</span> 2020. All Rights Reserved.</p>
                            </div>
                            {/*  Copyright End */}
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;