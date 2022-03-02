import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getGarages } from 'store/actions/provider';
import { Link } from 'react-router-dom';

const  GaragesList = () => {
    const dispatch = useDispatch();
    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = useSelector(state => state.providersScreenReducer.garages);


    useEffect(() => {
        dispatch(getGarages({ records_per_page, page_index }));
    }, []);




    return (
        <React.Fragment>
            {
                loading ? <Loader /> :
                    <div className="ltn__apartments-tab-content-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                        <ul className="ltn__select-availability-table-head">
                                            <li className="table-data-1">Garage name</li>
                                            <li className="table-data-3">POC name</li>
                                            <li className="table-data-4">Contact number</li>
                                            <li className="table-data-6">Garage address</li>
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
                                                        <img src={carImg} alt="car" />
                                                        {record.Name}
                                                    </strong>
                                                </li>
                                                <li className="table-data-3">{contact?.FullName || ""}</li>
                                                <li className="table-data-4">{contact?.PhoneNumber | ""}</li>
                                                <li className="table-data-6">
                                                    {location?.StreetAddress || ""}
                                                </li>
                                                <li className="table-data-7">
                                                    <strong>
                                                        <Link to={`/admin/edit_provider/garage/${record.Id}?tab=0`} >Edit</Link>
                                                    </strong>
                                                </li>
                                                {/* <li className="table-data-8">
                                                    <a
                                                        className="ltn__secondary-color"
                                                        href="garage-details.html"
                                                    >
                                                        <strong>Details</strong>
                                                    </a>{" "}
                                                </li> */}
                                            </ul>
                                            )
                                        } 
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }


            {/* <Pagination /> */}
        </React.Fragment>
    )
}

export default GaragesList
