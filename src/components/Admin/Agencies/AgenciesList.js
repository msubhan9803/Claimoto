import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAgency } from 'store/actions/provider';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';

const AgenciesList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let agency_actions = getAllowActions({ permissions, module_name: "PA" });


    const dispatch = useDispatch();


    const {
        agencies,
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
    } = agencies;


    const _getList = () => {
        dispatch(getAgency({
            records_per_page,
            page_index, search_option,
            search_text,
            search_option,
            sort_type,
            sort_name,
        }));
    }



    const _paginationHandler = () => {
        _getList();
    }



    useEffect(() => {
        _getList();
    }, []);




    return (
        <React.Fragment>


            <div className="ltn__product-tab-content-inner">

                <div className="row">
                    {loading ?
                        <LoaderAnimation /> :
                        <div className="col-lg-12">
                            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                <div className="ltn__select-availability-table  d-none d-md-block">
                                    <ul className="ltn__select-availability-table-head">
                                        <li className="table-data-1">Agency</li>
                                        <li className="table-data-3">POC name</li>
                                        <li className="table-data-4">Contact number</li>
                                        <li className="table-data-6">Agency address</li>
                                        <li className="table-data-7">Edit </li>
                                        <li className="table-data-8">Details</li>
                                    </ul>
                                    {list.map(record => {
                                        return (
                                            <ul className="ltn__select-availability-table-row">
                                                <li className="table-data-1">
                                                    <strong>
                                                        <img src={record.Image && `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`} alt="" />
                                                        {record.Name}
                                                    </strong>
                                                </li>
                                                <li className="table-data-3">{record?.FullName || ""}</li>
                                                <li className="table-data-4">{record?.PhoneNumber || ""}</li>
                                                <li className="table-data-6">{record?.StreetAddress || ""}</li>
                                                <li className="table-data-7">
                                                    {agency_actions?.includes("UPDATE") &&
                                                        <strong>
                                                            <Link to={`/admin/edit_provider/agency/${record.Id}?tab=0`} >Edit</Link>
                                                        </strong>
                                                    }
                                                </li>
                                                <li className="table-data-7">
                                                        {agency_actions?.includes("VIEW") &&
                                                            <strong>
                                                                <Link to={`/admin/view_provider/agency/${record.Id}?tab=0`} >View</Link>
                                                            </strong>
                                                        }
                                                    </li>
                                            </ul>)
                                    })}

                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>



            <Pagination recordsCount={count} pageIndex={page_index} recordsPerPage={records_per_page} handler={_paginationHandler} className="mt-3" />
        </React.Fragment>
    )
}

export default AgenciesList;
