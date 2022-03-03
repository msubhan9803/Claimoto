import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAgency } from 'store/actions/provider';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';

const AgenciesList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let agency_actions = getAllowActions({ permissions, module_name: "PA" });



    const dispatch = useDispatch();
    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = useSelector(state => state.providersScreenReducer.agencies);


    useEffect(() => {
        dispatch(getAgency({ records_per_page, page_index }));
    }, []);


    return (
        <React.Fragment>


            <div className="ltn__product-tab-content-inner">

                <div className="row">
                    {loading ?
                        <Loader /> :
                        <div className="col-lg-12">
                            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                <div className="ltn__select-availability-table  d-none d-md-block">
                                    <ul className="ltn__select-availability-table-head">
                                        <li className="table-data-1">Agency</li>
                                        <li className="table-data-3">POC name</li>
                                        <li className="table-data-4">Contact number</li>
                                        <li className="table-data-6">Agency address</li>
                                        <li className="table-data-7">Edit </li>
                                        {/* <li className="table-data-8">Details</li> */}
                                    </ul>
                                    {list.map(record => {
                                        let contact = record.ProviderContacts?.length > 0 ? record.ProviderContacts[0] : null;
                                        let location = record.ProviderLocations?.length > 0 ? record.ProviderLocations[0] : null;
                                        return (
                                            <ul className="ltn__select-availability-table-row">
                                                <li className="table-data-1">
                                                    <strong>
                                                    <img  src={record.ImageUrl && `${process.env.REACT_APP_API_ENVIROMENT}/${record.ImageUrl}`} alt="" />
                                                        {record.Name}
                                                    </strong>
                                                </li>
                                                <li className="table-data-3">{contact?.FullName || ""}</li>
                                                <li className="table-data-4">{contact?.PhoneNumber || ""}</li>
                                                <li className="table-data-6">{location?.StreetAddress || ""}</li>
                                                {agency_actions?.includes("UPDATE") &&
                                                    <li className="table-data-7">
                                                        <strong>
                                                            <Link to={`/admin/edit_provider/agency/${record.Id}?tab=0`} >Edit</Link>
                                                        </strong>
                                                    </li>
                                                }
                                                {/* <li className="table-data-8">
                                            <a
                                                className="ltn__secondary-color"
                                                href="agency-details.html"
                                            >
                                                <strong>Details</strong>
                                            </a>{" "}
                                        </li> */}
                                            </ul>)
                                    })}

                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>



            {/* <Pagination /> */}
        </React.Fragment>
    )
}

export default AgenciesList;
