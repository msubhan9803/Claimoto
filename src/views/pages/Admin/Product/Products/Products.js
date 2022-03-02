// import SearchBar from 'components/Admin/SearchBar/SearchBar'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetProduct, SortProducts, ProductStatus, GetInputs , GetProducts } from 'store/actions/product'
import { useSelector, useDispatch } from 'react-redux'
import {  _productDetailDotDot } from 'functions'
import moment from 'moment'
function Products() {

    // State 
    const [search, setSearch] = useState('')

    // selector hook
    const products = useSelector(state => state.productReducer.allProducts)
    const inputValue = useSelector(state => state.productReducer.product)


    // dipatch hook

    const dispatch = useDispatch()

    // disptach peoduct action 
    useEffect(() => {
        dispatch(GetProduct())

    }, [])


    // search filter 
    const filteredProduct = products.filter(
        (item) => {
            return item.ProductName && item.ProductName.toLowerCase().indexOf(search.toLowerCase()) !== -1
        }
    );

    // sort product 
    const changeValue = (e) => {
        if (e.target.name === "status") {
            const { name, value } = e.target;
            dispatch(GetInputs(name, value))
            dispatch(ProductStatus(value))
        }
        else {
            const { name, value } = e.target;
            dispatch(GetInputs(name, value))
            dispatch(SortProducts(value, products))
        }
    }

   


    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">

                                <h2>Products</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 align-self-center text-end">
                            <div className="ltnd__date-area d-none">
                                <div className="ltn__datepicker">
                                    <div className="ltn_datepicker-title">
                                        <span>Date</span>
                                    </div>
                                    <div className="input-group date" data-provide="datepicker">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select Date"
                                        />
                                        <div className="input-group-addon">
                                            <i className="far fa-calendar-alt" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-middle-area end */}
            </div>
            {/* <!-- Body main wrapper start --> */}
            <div className="body-wrapper">
                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter mb-120">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    <form _lpchecked={1}>
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Search product..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="search"
                                        />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <li>
                                            <div className="short-by text-center">
                                                <div className="short-by-title">
                                                    <p>Status</p>
                                                </div>
                                                <div className="short-by-menu">
                                                    <select className="form-control"
                                                        onChange={changeValue}
                                                        value={inputValue.status}
                                                        name="status">
                                                        <option value="active" >Active </option>
                                                        <option value="inActive">InActive </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </li>
                                        {/* <button onClick={()=> changeValue()}>sort</button> */}
                                        <li>
                                            <div className="short-by text-center">
                                                <div className="short-by-title">
                                                    <p>Date Added</p>
                                                </div>
                                                <div className="short-by-menu">
                                                    <select
                                                        className="form-control"
                                                        name="sort"
                                                        value={inputValue.sort}
                                                        onChange={changeValue}

                                                    >
                                                        <option value="All">All</option>
                                                        <option value="ProductName">Sort by Name </option>
                                                        <option value="All" >All </option>

                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <select className="form-control">
                                                    <option>Download</option>
                                                    <option>Sort by </option>
                                                    <option>Sort by new </option>
                                                    <option>Sort by price</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <select className="form-control">
                                                    <option>Import</option>
                                                    <option>Sort by </option>
                                                    <option>Sort by new </option>
                                                    <option>Sort by price</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <Link to="/admin/create_product" className="btn theme-btn-1 btn-round-12">
                                                    Add +
                                                </Link>
                                                {/* <button type="submit" className="btn theme-btn-1 btn-round">Add +</button> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* product-item */}
                            {filteredProduct ? filteredProduct.map((item, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6" key={item.id}>
                                        <div className="ltnd__product-item">
                                            <h6 className="ltnd__product-title">
                                                <Link to={`/admin/product_detail/${item.id}`}>{_productDetailDotDot(item.ProductName, 20)}</Link>
                                            </h6>
                                            <div className='d-flex fd-row' style={{ justifyContent: 'space-between' }}>
                                                <p className="ltnd__product-availability">{Number(item.AnnualPremium).toFixed(3)} KDW</p>
                                                <p className="ltnd__product-availability">{moment(item.CreatedDate).format('MMMM Do YYYY, h:mm')}</p>

                                            </div>
                                            <div className="ltnd__product-brief">
                                                <p>
                                                    {
                                                        _productDetailDotDot(item.ProductDetails, 120)
                                                    }

                                                </p>
                                            </div>
                                            <div className="ltnd__product-btn" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{display:'flex' , flexDirection:'column' , textAlign:'left'}}>

                                                        <strong>Last Modify</strong>
                                                        <small style={{fontSize:'10px'}}>{moment(item.UpdatedDate).format('MMMM Do YYYY, h:mm')}</small>
                                                </div>
                                               
                                                <div>

                                                    <Link to={`/admin/product_detail/${item.id}`}>
                                                        <strong>View details</strong>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                                : null
                            }

                            {products && !products.length && <h2>Product not available</h2>}

                        </div>
                    </div>
                    {/* PRODUCT AREA END */}
                </div>
                {/* Body Content Area Inner End */}
            </div>
            {/* <!-- Body main wrapper end --> */}

        </React.Fragment>
    )
}

export default Products
