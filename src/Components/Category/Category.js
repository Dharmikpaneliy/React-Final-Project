import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getdata } from '../../Container/Redux/Action/Cat_admin.action';
import { getdatapr } from '../../Container/Redux/Action/Pr_admin.action';

function Category(props) {

    // const [data, setData] = useState([])
    const [Product, setProduct] = useState([])
    const admin = useSelector(state => state.cat)
    const Products = useSelector(state => state.Pr)

    const cattegorydata = admin.category
    const ProductData = Products.Pro;

    const data = admin.cat;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getdata());
            dispatch(getdatapr());
            // setData(admin.cat)
        }, []
    )

    return (
        <>
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


            <div className='category'>

                <div className='d-flex justify-content-center mt-3'>
                    <a>
                        <div className='border border-radius bg-secondary text-white margin-20'>All</div>
                    </a>

                    {
                        cattegorydata.map((l) => (
                            <>
                                <div className='margin-20'>
                                    {/* <div><img src={l.file} alt="image" height={60} /></div> */}
                                    <div className='border border-radius bg-secondary text-white'>{l.name}</div>
                                </div>
                            </>
                        ))
                    }
                </div>

            </div>

            <div>
                <div>
                    <div className='row mt-5'>
                        {
                            ProductData.map((d) => (
                                <>
                                    <div className='col-lg-3'>
                                        <div className='text-center product-all-d mt-4'>
                                            <img src={d.file} alt="image" width={200} />
                                            <div>{d.name}</div>
                                            <div>{d.price}</div>
                                            <button className='btn btn-dark text-center mb-5'>Read More</button>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category;