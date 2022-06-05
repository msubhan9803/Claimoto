import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getGarages, changeHandlerProvider } from 'store/actions/provider';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';

const GaragesList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let garage_actions = getAllowActions({ permissions, module_name: "PG" });




    const dispatch = useDispatch();
    const {
        garages,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.providersScreenReducer);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = garages;


    const _paginationHandler = (pageIndex) => {
        let modeule = "garages";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerProvider({modeule, key, val}));
    }


    const _getList = () => {
        dispatch(getGarages({
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }


    useEffect(() => {
        _getList();
    }, [page_index]);


    useEffect(() => {
        _paginationHandler(1);
    }, []);




    return (
        <React.Fragment>
            {
                loading ? <LoaderAnimation /> :
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
                                            <li className="table-data-7">Services </li>
                                            <li className="table-data-7">Edit </li>
                                            <li className="table-data-8">Details</li>
                                        </ul>
                                        {list.map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">
                                                    <li className="table-data-1">
                                                        <strong>
                                                            <img src={record.Image && `${process.env.REACT_APP_API_ENVIRONMENT}/${record.Image}`} alt="" />
                                                            {record.Name}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-3">{record?.FullName || ""}</li>
                                                    <li className="table-data-4">{record?.PhoneNumber | ""}</li>
                                                    <li className="table-data-6">
                                                        {record?.StreetAddress || ""}
                                                    </li>
                                                    <li className="table-data-7 text-primary">
                                                        {garage_actions?.includes("VIEW") &&
                                                            <strong>
                                                                <Link to={`/admin/view_provider_services/garage/${record.Id}?tab=0`} >Services</Link>
                                                            </strong>
                                                        }
                                                    </li>
                                                    
                                                    <li className="table-data-7">
                                                        {garage_actions?.includes("UPDATE") &&
                                                            <strong>
                                                                <Link to={`/admin/edit_provider/garage/${record.Id}?tab=0`} >Edit</Link>
                                                            </strong>
                                                        }
                                                    </li>
                                                    <li className="table-data-7">
                                                        {garage_actions?.includes("VIEW") &&
                                                            <strong>
                                                                <Link to={`/admin/view_provider/garage/${record.Id}?tab=0`} >View</Link>
                                                            </strong>
                                                        }
                                                    </li>

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


            <Pagination recordsCount={count} pageIndex={page_index} recordsPerPage={records_per_page} handler={_paginationHandler} className="mt-3" />
        </React.Fragment>
    )
}

export default GaragesList
