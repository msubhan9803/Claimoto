import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getSurveyor } from 'store/actions/provider';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { changeHandlerProvider } from 'store/actions/provider';

const SurveyorList = () => {


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let surveyor_actions = getAllowActions({ permissions, module_name: "PS" });


    const dispatch = useDispatch();



    const {
        surveyorers,
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
    } = surveyorers;



    const _getList = () => {
        dispatch(getSurveyor({
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }


    const _paginationHandler = (pageIndex) => {
        let module = "surveyorers";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerProvider({module, key, val}));
    }
    useEffect(() => {
        _getList();
    }, [page_index]);

    useEffect(() => {
        _paginationHandler(1);
    }, []);



    return (
        <React.Fragment>
            {loading ? <LoaderAnimation /> :
                <div className="ltn__apartments-tab-content-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                <div className="ltn__select-availability-table  d-none d-md-block">
                                    <ul className="ltn__select-availability-table-head">
                                        <li className="table-data-1">Surveyor name</li>
                                        <li className="table-data-3">POC name</li>
                                        <li className="table-data-4">Contact number</li>
                                        <li className="table-data-6">Surveyor address</li>
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
                                                <li className="table-data-4">{record?.PhoneNumber || ""}</li>
                                                <li className="table-data-6">
                                                    {record?.StreetAddress || ""}
                                                </li>
                                                <li className="table-data-7">

                                                    {surveyor_actions?.includes("UPDATE") &&
                                                        <strong>
                                                            <Link to={`/admin/edit_provider/surveyor/${record.Id}?tab=0`} >Edit</Link>
                                                        </strong>
                                                    }
                                                </li>
                                                <li className="table-data-7">
                                                    {surveyor_actions?.includes("VIEW") &&
                                                        <strong>
                                                            <Link to={`/admin/view_provider/surveyor/${record.Id}?tab=0`} >View</Link>
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

export default SurveyorList;
