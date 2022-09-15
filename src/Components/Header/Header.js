import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            {/*Top Header Start */}
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-12">
                            <ul className="list-inline float-left icon">
                                <li className="list-inline-item"><a href="#"><i className="icofont icofont-phone" /> Hotline : 123 456 7890</a></li>
                            </ul>
                            {/* Header Social Start */}
                            <ul className="list-inline float-right icon">
                                {/* <li className="list-inline-item"><a href="shopping-cart.html"><i className="icofont icofont-cart-alt" /> Cart</a></li> */}
                                <li className="list-inline-item"><NavLink to={"cart"}><i className="icofont icofont-cart-alt" /> Cart</NavLink></li>
                                <li className="list-inline-item dropdown">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icofont icofont-ui-user" /> My Account</a>
                                    <ul className="dropdown-menu dropdown-menu-right drophover" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item"><Link to={"/login"}>Login</Link></li>
                                        <li className="dropdown-item"><a>Register</a></li>
                                    </ul>
                                </li>
                                <li className="list-inline-item">
                                    <ul className="list-inline social">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/spheretheme/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/spheretheme/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                        <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        <li className="list-inline-item"><a href="https://in.pinterest.com/" target="_blank"><i className="icofont icofont-social-pinterest" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.youtube.com/" target="_blank"><i className="icofont icofont-social-youtube-play" /></a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* Header Social End */}
                        </div>
                    </div>
                </div>
            </div>
            {/*Top Header End */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        {/* Logo Start  */}
                        <div id="logo">
                            <a href="index.html"><img id="logo_img" className="img-fluid" src="assets/images/logo/logo.png" alt="logo" title="logo" /></a>
                        </div>
                        {/* Logo End  */}
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 paddleft">
                        {/* Main Menu Start  */}
                        <div id="menu">
                            <nav className="navbar navbar-expand-md">
                                <div className="navbar-header">
                                    <span className="menutext d-block d-md-none">Menu</span>
                                    <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="btn btn-navbar navbar-toggler" type="button"><i className="icofont icofont-navigation-menu" /></button>
                                </div>
                                <div className="collapse navbar-collapse navbar-ex1-collapse padd0">
                                    <ul className="nav navbar-nav">
                                        {/* <li className="nav-item"><a href="index.html">HOME</a></li> */}
                                        <li className="nav-item"><NavLink to={"/"}>Home</NavLink></li>

                                        {/* <li className="nav-item"><a href="about.html">about us</a></li> */}
                                        <li className="nav-item"><NavLink to={"/about"}>About Us</NavLink></li>

                                        {/* <li className="nav-item"><a href="menu.html">Our Menu</a></li> */}
                                        <li className="nav-item"><NavLink to={"/menu"}>Our Menu</NavLink></li>

                                        {/* <li className="nav-item"><a href="blog.html">Our Blog</a></li> */}
                                        <li className="nav-item"><NavLink to={"/blog"}>Our Blog</NavLink></li>

                                        {/* <li className="nav-item"><a href="contact-us.html">contact us</a></li> */}
                                        <li className="nav-item"><NavLink to={"/contact"}>Contact Us</NavLink></li>
            
                                        <li className="nav-item"><NavLink to={"/category"}>Category</NavLink></li>

                                        {/* <li className="nav-item"><NavLink to={"/cat_admin"}>Catgories</NavLink></li> */}

                                        {/* <li className="nav-item"><NavLink to={"/pr_admin"}>Products</NavLink></li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* Main Menu End */}
                    </div>
                    <div className="col-md-2 col-sm-12 col-12 button-top paddleft">
                        <a className="btn-primary btn" href="reservation.html">Book Your Table</a>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;