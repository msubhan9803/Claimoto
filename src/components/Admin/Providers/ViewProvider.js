import React, { useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { setProviderDetails } from 'store/actions/provider';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from 'components/Admin/Providers/Map/MapComponent';

const ViewProvider = () => {
    const { type, id } = useParams();


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { addTabs, tab1, tab2, tab3, success, loading, user_loading } = useSelector(state => state.addProviderScreenReducer);
    const { name, contacts, logo } = tab1;
    const { selected_service_types } = tab2;
    const { selected_locations, location_values } = tab3;
    const { lat, long } = location_values;
    //Map Defaults
    const zoom = 7;

    const _setProviderDetails = (id) => {
        dispatch(setProviderDetails(id));
    }


    useEffect(() => {
        if (id) {
            _setProviderDetails(id);
        }
    }, [id]);


    const _mapRender = (status) => {
        // if (status === Status.LOADING) return <h3>{status} ..</h3>;
        // if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        // return null;
        return <p>{status}</p>;

    };


    return (
        <>
            {user_loading ?
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
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="ltnd__block-item mt-30">
                                    <div class="ltn__block-item-info">
                                        <div class="ltnd__edit-table-logo-title mb-20">
                                            <div class="ltnd__edit-table-logo">
                                                <img src={logo?.Base64 || typeof logo === "string" && `${process.env.REACT_APP_API_ENVIROMENT}/${logo}` || Garage_Icon} alt="#" />
                                            </div>
                                            <div class="ltnd__edit-table-title">
                                                <h3 class="animated fadeIn">{name} </h3>
                                                <p class="ltn__color-1">15869</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h6 class="ltnd__title-3">POC</h6>
                                                <h6>{contacts?.length > 0 ? contacts[0].full_name : ""}</h6>
                                                <p>{contacts?.length > 0 ? contacts[0].phone : ""}</p>
                                            </div>
                                            <div class="col-lg-8">
                                                <h6 class="ltnd__title-3">Main HQ</h6>
                                                <p>{selected_locations.length > 0 ? selected_locations[0]?.name : ""} <br />

                                                    {selected_locations.length > 0 ? selected_locations[0]?.street_address : ""}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="google-map ltnd__garage-details-map mt-30">
                                <Wrapper apiKey='AIzaSyASwWi0HKSx9m6NhXKyn-voaZm2YunPtx4' render={_mapRender}>
                                        <MapComponent height={290} center={{ lat: parseFloat(lat), lng: parseFloat(long) }} zoom={zoom} />
                                    </Wrapper>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ltnd__block-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ltnd__block-item mt-30">
                                        <div class="ltnd__title ltnd__title-2">
                                            <h4>Branches</h4>
                                        </div>
                                        <div class="ltn__block-item-info">
                                            <div class="row">
                                                {selected_locations?.map(loc => (
                                                    <div class="col-lg-6">
                                                        <div class="garage-details-single-item mb-40">
                                                            <h6 class="ltnd__title-3 mb-10">{loc.name}</h6>
                                                            <p>{loc.street_address}</p>
                                                        </div>
                                                    </div>
                                                ))}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ltnd__block-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ltnd__block-item mt-30">
                                        <div class="ltnd__title ltnd__title-2">
                                            <h4>Services</h4>
                                        </div>
                                        <div class="ltn__block-item-info">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {selected_service_types?.map(serv => (
                                                        <div class="garage-details-single-item mb-40">
                                                            <h6 class="ltnd__title-3 mb-10">{serv?.parent_name || ""}</h6>
                                                            <ul>
                                                                <li>{serv?.service_name || ""}</li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="ltnd__block-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ltnd__block-item mt-30">
                                        <div class="ltnd__title ltnd__title-2">
                                            <h4>Locations</h4>
                                        </div>
                                        <div class="ltn__block-item-info">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {selected_locations?.map(loc => (
                                                        <div class="garage-details-single-item mb-40">
                                                            <h6 class="ltnd__title-3 mb-10">{loc?.name || ""}</h6>
                                                            <ul>
                                                                <li>{loc?.street_address || ""}</li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
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


export default ViewProvider;