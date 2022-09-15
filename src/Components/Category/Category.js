import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getdata } from '../../Container/Redux/Action/Cat_admin.action';
import { getdatapr } from '../../Container/Redux/Action/Pr_admin.action';

function Category(props) {

    // const [data, setData] = useState([])
    const [Product, setProduct] = useState([])
    const admin = useSelector(state => state.cat)
    console.log(admin.cat);

    const Products = useSelector(state => state.Pr)

    const ProductData = Products.Pro;
    console.log("Products0", ProductData);

    const data = admin.cat;
    // console.log(data);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getdata());
            dispatch(getdatapr());
            // setData(admin.cat)
        }, []
    )


    // const filterResult = (catItem) => {
    //     const result = Categories.filter((curData) => {
    //         return admin.cat.category === catItem;
    //     })
    //     // setData(result)
    // }


    // let finaldata = Product.length > 0 ? Product : Products.Pr;

    return (
        <>
            {/* Breadcrumb Start */}
            <div className="bread-crumb">
                <div className="container">
                    <div className="matter">
                        <h2>Category</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                            <li className="list-inline-item"><a href="#">Category</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
{/* 
            <div className="menu">
                <div className="menu-inner">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-12 col-12 commontop text-center">
                                <h4>Our Category</h4>
                                <div className="divider style-1 center">
                                    <span className="hr-simple left" />
                                    <i className="icofont icofont-ui-press hr-icon" />
                                    <span className="hr-simple right" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                            </div>
                            <div className="col-sm-12 col-12">
                                <ul className="nav nav-tabs list-inline">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#all" data-toggle="tab" aria-expanded="true">all</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#breakfast" data-toggle="tab" aria-expanded="false">Breakfast</a>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div>
               {
                   ProductData.map((d) => (
                    <div>{d.name}</div>,
                    <div>{d.price}</div>,
                    <img src="d.file" alt="image" title="image" className="img-responsive" />
                ))
               }
            </div>

           
        </>
    )
}

export default Category;