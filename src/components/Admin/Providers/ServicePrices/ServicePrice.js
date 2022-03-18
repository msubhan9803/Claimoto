import React, { useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { setProviderDetails } from 'store/actions/provider';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { capitalizeFirstLetter } from 'functions';
import Header from 'components/Header/Header';

const ViewProviderServicesPrices = () => {
    const { id } = useParams();


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const _getProviderServies = (id, type) => {

    }

    useEffect(() => {
        if (id) {
            // _getProviderServies(id, type);
        }
    }, [id]);





    return (
        <>
            {1 + 1 == 3 ?
                <div style={{ textAlign: "center" }}>
                    <LoaderAnimation />
                </div>
                :
                <div class="ltnd__block-area pb-50">

                    <div class="container" >
                        <div className='row'>
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <p onClick={() => navigate(-1)} role="button" className="page-back-btn">
                                        <i className="icon-left-arrow-1" /> Back
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* <Header search_options={[]} search_text="" search_option="" name={`${capitalizeFirstLetter(type)}  Services`} /> */}





                        <div className='row'>
                            <div className="col-lg-12 mt-4">
                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                        <ul className="ltn__select-availability-table-head">
                                            <li className="table-data-3">ID</li>
                                            <li className="table-data-1">Provider</li>
                                            <li className="table-data-1">Unit Price</li>
                                            <li className="table-data-3">Start Date</li>
                                            <li className="table-data-5">End Date</li>
                                            <li className="table-data-5">Discount (%)</li>
                                            <li className="table-data-5">Remarks</li>
                                            
                                        </ul>
                                        {[1, 2, 3, 5, 6, 7, 8].map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">
                                                    <li className="table-data-3">
                                                        <strong>
                                                            1001
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            <img src={record.Image && `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`} alt="" />
                                                            {record?.Name || "Service 1"}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">{record?.FullName || "Blah Blah Blah ...."}</li>
                                                    <li className="table-data-3">{record?.FullName || "Type 1"}</li>
                                                    <li className="table-data-5">{record?.StreetAddress || "Toyota"}</li>
                                                    <li className="table-data-5">{record?.StreetAddress || "Camry"}</li>
                                                    <li className="table-data-5">{record?.StreetAddress || "2017-18"}</li>
                                                </ul>)
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}


export default ViewProviderServicesPrices;