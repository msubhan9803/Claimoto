import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { getUsers } from "store/actions/users/users_screen";
import Pagination from 'components/Pagination/Pagination';
import { setUserPage } from 'store/actions/users/users_screen';
import { getAllowActions } from 'functions';
import Loader from 'components/Loader/Loader';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';

function RuleList() {
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    })

    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Rule List </h2>
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



                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    {/* <form action="#" _lpchecked={1}>
                                        <input
                                            type="text"
                                            name="search_text"
                                            placeholder="Search ..."
                                            onChange={_handleChange}
                                            className=""
                                            value={search_text}
                                        />
                                        <button type="submit">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                        <select name="search_option" value={search_option} onChange={_handleChange} className='select search-options'>
                                            <option disabled value={""}>Search By</option>
                                            {search_options.map((op) => (
                                                <option key={op.value} value={op.value}>{op.label}</option>

                                            ))}
                                        </select>
                                    </form> */}

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        {/* <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_name" value={sort_name} className="nice-select">
                                                    <option disabled value={""}>Sort By</option>
                                                    {search_options.map((op) => (
                                                        <option key={op.value} value={op.value}>{op.label}</option>

                                                    ))}
                                                </select>
                                            </div>
                                        </li> */}
                                        
                                            <li>
                                                <div className="btn-wrapper text-center mt-0">
                                                        <Link
                                                            to={"/admin/add_rule"}
                                                            className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                            Add Rule +
                                                        </Link>
                                                </div>
                                            </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                <div className="row">
                    <div className="col-lg-12">
                        {loading ?
                            <LoaderAnimation />
                            :
                            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                <div className="ltn__select-availability-table  d-none d-md-block">
                                    <ul className="ltn__select-availability-table-head">
                                        <li className="table-data-5">Name</li>
                                        <li className="table-data-5">Amount From</li>
                                        <li className="table-data-5">Amount To</li>
                                        <li className="table-data-6">Include Services Count</li>
                                        <li className="table-data-5">Exclude Services Count</li>
                                        <li className="table-data-10">Assigned To</li>
                                        <li className="table-data-7">View</li>
                                        <li className="table-data-7">EDIT</li>
                                    </ul>

                                </div>




                            </div>
                        }
                    </div>
                    </div>
                </div>
            </div>

        </React.Fragment>)
}

export default RuleList;
