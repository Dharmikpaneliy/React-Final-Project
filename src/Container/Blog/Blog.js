import React from 'react';

function Blog(props) {
    return (
        <div>
            {/* Breadcrumb Start */}
            <div className="bread-crumb">
                <div className="container">
                    <div className="matter">
                        <h2>Our Blog</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                            <li className="list-inline-item"><a href="#">Our Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Blog Start */}
            <div className="blog">
                <div className="bloggs">
                    <div className="container">
                        <div className="row">
                            {/* Title Content Start */}
                            <div className="col-sm-12 commontop text-center">
                                <h4>Our Blog</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b4.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b3.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b8.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b1.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b5.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-6 col-md-4">
                                {/* Single Blog Start */}
                                <div className="box">
                                    <img src="assets/images/blog/b2.jpg" className="img-fluid" alt="image" title="image" />
                                    <div className="caption">
                                        <h4>Blog Title Here</h4>
                                        <p className="text">May 15, 2017 / By admin / 3 Comments</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan...</p>
                                        <a className="btn btn-theme-alt btn-md" href="#">Read More <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            <div className="col-sm-12 col-12 text-center">
                                {/* Pagination Start */}
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous"><i className="icofont icofont-double-left" /></a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">01</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">02</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">03</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">04</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">...</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">18</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next"><i className="icofont icofont-double-right" /></a>
                                    </li>
                                </ul>
                                {/* Pagination End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            {/* Testimonials Start  */}
            <div className="testimonials">
                <div className="container">
                    <div className="testimonials-inner">
                        <div className="row ">
                            {/* Title Content Start */}
                            <div className="col-sm-12 col-12 commontop white text-center">
                                <h4>What Our Customers Say</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                            </div>
                            {/* Title Content End */}
                            <div className="col-sm-12 col-12">
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

export default Blog;