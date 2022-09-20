import React from 'react';

function Contact(props) {
    return (
        <div>

            {/* Breadcrumb Start */}
            <div className="bread-crumb">
                <div className="container">
                    <div className="matter">
                        <h2>Contact Us</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                            <li className="list-inline-item"><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            
            {/* Contact us Start */}
            <div className="contactus">
                <div className="container">
                    <div className="row">
                        {/* Title Content Start */}
                        <div className="col-sm-12 commontop text-center">
                            <h4>Get In Touch</h4>
                            <div className="divider style-1 center">
                                <span className="hr-simple left" />
                                <i className="icofont icofont-ui-press hr-icon" />
                                <span className="hr-simple right" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                        </div>
                        {/* Title Content End */}
                        <div className="col-md-5 col-12">
                            {/*  Contact form Start  */}
                            <form method="post" encType="multipart/form-data" className="form-horizontal">
                                <div className="form-group row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <i className="icofont icofont-ui-user" />
                                        <input type="text" name="name" defaultValue id="input-name" className="form-control" placeholder="Name" value={""}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <i className="icofont icofont-ui-message" />
                                        <input type="text" name="email" defaultValue id="input-email" className="form-control" placeholder="Email" value={""}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <i className="icofont icofont-phone" />
                                        <input type="text" name="phone" defaultValue id="input-phone" className="form-control" placeholder="Mobile number" value={""}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <i className="icofont icofont-pencil-alt-5" />
                                        <textarea name="enquiry" id="input-enquiry" className="form-control" rows={5} placeholder="message" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="buttons">
                                    <input className="btn btn-theme btn-block" type="submit" defaultValue="Send Message" />
                                </div>
                            </form>
                            {/*  Contact form End  */}
                        </div>
                        <div className="col-md-7 col-12">
                            {/*  Map Start  */}
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115073.2374313485!2d-73.93673358491914!3d40.72030531038137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1513832984699" />
                            </div>
                            {/*  Map End  */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Us End  */}
            {/* Address Start  */}
            <div className="address">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="address-box">
                                <div className="box text-center">
                                    <div className="icon">
                                        <i className="icofont icofont-home" />
                                    </div>
                                    <h4>ADDRESS</h4>
                                    <p>20, floor, Restaurant Food &amp; Drinks, Nr, Queenslad Victoria Building, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="address-box">
                                <div className="box text-center">
                                    <div className="icon">
                                        <i className="icofont icofont-phone" />
                                    </div>
                                    <h4>PHONE NO.</h4>
                                    <p>1800 000 0000,<br />+88 123 1234 1234</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="address-box">
                                <div className="box text-center">
                                    <div className="icon">
                                        <i className="icofont icofont-ui-message" />
                                    </div>
                                    <h4>EMAIL</h4>
                                    <p><a href="#">info@yourdomainname.com</a><br /><a href="#">contact@yourdomainname.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="address-box">
                                <div className="box social">
                                    <h4>SOCIAL LINKES</h4>
                                    <ul className="list-inline ">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="icofont icofont-social-facebook" /></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/" target="_blank"><i className="icofont icofont-social-twitter" /></a></li>
                                        <li className="list-inline-item"><a href="https://plus.google.com/" target="_blank"><i className="icofont icofont-social-google-plus" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="icofont icofont-social-instagram" /></a></li>
                                        <li className="list-inline-item"><a href="https://in.pinterest.com/" target="_blank"><i className="icofont icofont-social-pinterest" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.stumbleupon.com/" target="blank"><i className="icofont icofont-social-stumbleupon" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.youtube.com/" target="_blank"><i className="icofont icofont-social-youtube-play" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.yelp.com/" target="_blank"><i className="icofont icofont-social-yelp" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Address End  */}
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
            {/* Newsletter End */}
        </div>

    );
}

export default Contact;