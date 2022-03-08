import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Pagination from 'components/Pagination/Pagination';
import { getCarAgency } from 'store/actions/provider';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { changeHandlerProvider } from 'store/actions/provider';

function CarAgenciesList() {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let car_agency_actions = getAllowActions({ permissions, module_name: "PCA" });


    const dispatch = useDispatch();

    const {
        car_agencies,
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
    } = car_agencies;



    const _paginationHandler = (pageIndex) => {
        let modeule = "car_agencies";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerProvider({modeule, key, val}));
    }

    const _getList = () => {
        dispatch(getCarAgency({
            records_per_page, page_index,
            search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }


    useEffect(() => {
        _getList();
    }, [page_index]);





    return (
        <React.Fragment>
            {/* SELECT AVAILABILITY AREA START */}
            {loading ? <LoaderAnimation /> :
                <div className="ltn__product-tab-content-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__car-agencies-table-wrap">
                                <div className="ltn__select-availability-table  d-none d-md-block">
                                    <ul className="ltn__select-availability-table-head">
                                        <li className="table-data-1">Car Agency Name</li>
                                        <li className="table-data-3">POC name</li>
                                        <li className="table-data-4">Contact number</li>
                                        <li className="table-data-6">Car Agency address</li>
                                        <li className="table-data-7">Edit </li>
                                        <li className="table-data-8">Details</li>
                                    </ul>
                                    {list.map(record => {
                                        return (
                                            <ul key={record.Id} className="ltn__select-availability-table-row">
                                                <li className="table-data-1">
                                                    <strong>
                                                    <img src={record.Image && `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`} alt="" />
                                                        {record.Name}
                                                    </strong>
                                                </li>
                                                <li className="table-data-3">{record?.FullName || ""}</li>
                                                <li className="table-data-4">{record?.PhoneNumber || ""}</li>
                                                <li className="table-data-6">{record?.StreetAddress | ""}</li>
                                                <li className="table-data-7">
                                                    {car_agency_actions?.includes("UPDATE") &&
                                                        <strong>
                                                            <Link to={`/admin/edit_provider/car%20agency/${record.Id}?tab=0`} >Edit</Link>
                                                        </strong>
                                                    }
                                                </li>
                                                <li className="table-data-7">
                                                        {car_agency_actions?.includes("VIEW") &&
                                                            <strong>
                                                                <Link to={`/admin/view_provider/car%20agency/${record.Id}?tab=0`} >View</Link>
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

export default CarAgenciesList;
