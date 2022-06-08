import React from 'react';

function Home(props) {
    return (
        <main>
            <section>
                {/* Banner Start */}
                <div className="banner-bg">
                    <div className="video-bg" data-property="{videoURL:'https://youtu.be/95SNbn340TE',containment:'.banner-bg',autoPlay:true, mute:true, startAt:0, opacity:1}"> </div>
                    {/* Banner Detail Start  */}
                    <div className="banner-detail">
                        <div className="container">
                            <img src="assets/images/logo/logo-icon.png" alt="logo1" title="logo1" className="img-responsive" />
                            <div className="cd-headline clip">
                                <h4>LOVES <span className="cd-words-wrapper">
                                    <b className="is-visible">HEALTHY</b>
                                    <b>QUALITY</b>
                                    <b>TESTY</b>
                                </span>FOOD</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            <a className="btn-primary btn btn-wide" href="#">Today's menu</a>
                        </div>
                    </div>
                    {/* Banner Detail End  */}
                </div>
                {/* Banner End  */}
                {/* Order Start  */}
                <div className="order">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Title Content Start */}
                            <div className="col-sm-12 commontop text-center">
                                <h4>Order Delivery and take out</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-lg-7 col-sm-12">
                                {/* Search Form Start */}
                                <form className="form-horizontal search-icon" method="post">
                                    <fieldset>
                                        <div className="form-group">
                                            <input name="s" defaultValue placeholder="Search keyword" className="form-control" type="text" />
                                        </div>
                                        <button type="submit" value="submit" className="btn btn-theme"><i className="icofont icofont-search" />Search</button>
                                    </fieldset>
                                </form>
                                {/* Search Form End */}
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <i className="icofont icofont-fast-food" />
                                        <p>Select Food</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="icofont icofont-food-basket" />
                                        <p>Order Food</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="icofont icofont-fast-delivery" />
                                        <p>Delivery or Take Out</p>
                                    </li>
                                </ul>
                                <img src="assets/images/lines.png" alt="line" title="line" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order End  */}
                {/* Popular Dishes Start */}
                <div className="dishes">
                    <div className="container">
                        <div className="row">
                            {/* Title Content Start */}
                            <div className="col-sm-12 commontop text-center">
                                <h4>Our Popular Dishes</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-sm-12">
                                <div className="dish owl-carousel">
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/01.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/02.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/03.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/04.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/05.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/01.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/02.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/03.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/04.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                    <div className="item">
                                        {/* Box Start */}
                                        <div className="box">
                                            <a href="#"><img src="assets/images/dishes/05.jpg" alt="image" title="image" className="img-fluid" /></a>
                                            <div className="caption">
                                                <h4>Dish Name Here</h4>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <p>$100</p>
                                            </div>
                                        </div>
                                        {/* Box End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Dishes End */}
                {/* Food Menu Start */}
                <div className="menu">
                    <div className="menu-inner">
                        <div className="container">
                            <div className="row ">
                                {/* Title Content Start */}
                                <div className="col-sm-12 col-12 commontop text-center">
                                    <h4>Our Menu</h4>
                                    <div className="divider style-1 center">
                                        <span className="hr-simple left" />
                                        <i className="icofont icofont-ui-press hr-icon" />
                                        <span className="hr-simple right" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                                </div>
                                {/* Title Content End */}
                                <div className="col-sm-12 col-12">
                                    {/*  Menu Tabs Start  */}
                                    <ul className="nav nav-tabs list-inline">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#all" data-toggle="tab" aria-expanded="true">all</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#breakfast" data-toggle="tab" aria-expanded="false">breakfast</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#lunch" data-toggle="tab" aria-expanded="false">lunch</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#dinner" data-toggle="tab" aria-expanded="false">dinner</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#drinks" data-toggle="tab" aria-expanded="false">drinks</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#others" data-toggle="tab" aria-expanded="false">others</a>
                                        </li>
                                    </ul>
                                    {/*  Menu Tabs Start  */}
                                    {/*  Menu Tabs Content Start  */}
                                    <div className="tab-content">
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane show active" id="all">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/03.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/06.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane" id="breakfast">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/06.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/09.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane" id="lunch">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/03.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/06.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane" id="dinner">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/03.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/09.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane" id="drinks">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/03.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/06.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                        {/*  Menu Tab Start  */}
                                        <div className="tab-pane" id="others">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/07.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/02.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/01.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/04.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/05.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/08.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/09.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    {/* Box Start */}
                                                    <div className="box">
                                                        <div className="image">
                                                            <img src="assets/images/our-menu/03.jpg" alt="image" title="image" className="img-fluid" />
                                                        </div>
                                                        <div className="caption">
                                                            <h4>Food Title Here</h4>
                                                            <p className="des">Cursus / Dictum / Risus</p>
                                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                            <div className="price">$35.00</div>
                                                        </div>
                                                    </div>
                                                    {/* Box End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Menu Tab End  */}
                                    </div>
                                    {/*  Menu Tabs Content End  */}
                                    <div className="text-center padbot30">
                                        <a className="btn btn-theme-alt btn-wide" href="menu.html">view more <i className="icofont icofont-curved-double-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Food Menu End */}
                {/* Reservation Start */}
                <div className="reservation">
                    <div className="container">
                        <div className="row ">
                            {/* Title Content Start */}
                            <div className="col-sm-12 commontop white text-center">
                                <h4>Book Your Table</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            </div>
                            {/* Title Content End */}
                            <div className="col-md-12 col-12">
                                {/* Reservation Form Start */}
                                <form action="https://www.spheretheme.com/html/steam/mailer.php" method="post" className="row reservation-form" noValidate="novalidate">
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-ui-user" /><input name="name" placeholder="name" id="input-name" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-ui-message" /><input name="email" placeholder="email" id="input-email" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-phone" /><input name="mobile" placeholder="mobile number" id="input-mobile" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-ui-calendar" /><input name="date" placeholder="date" id="input-date" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-clock-time" /><input name="time" placeholder="time" id="input-time" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-md-4 col-sm-6">
                                        <i className="icofont icofont-users" /><input name="persons" placeholder="number of persons" id="input-persons" className="form-control" type="text" required />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <div className>
                                            <div id="emailSend" className="alert alert-success" role="alert" style={{ display: 'none' }}>
                                                <div className="success-text">Your Message has been successfully sent.</div>
                                            </div>
                                            <div id="emailError" className="alert alert-danger" role="alert" style={{ display: 'none' }}>
                                                <div className="alert-text">Server error <br /> Try again later.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-theme btn-wide">book now</button>
                                        </div>
                                    </div>
                                </form>
                                {/* Reservation Form End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reservation End  */}
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
                                <div className="col-sm-4">
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
                                <div className="col-sm-4">
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
                                <div className="col-sm-4">
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
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
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
            </section>
        </main>



    );
}

export default Home;