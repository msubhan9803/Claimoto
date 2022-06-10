import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllowActions, formatDateTime } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getNotifications, changeHandlerNotifications } from 'store/actions/notifications';

const NotificationList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let garage_actions = getAllowActions({ permissions, module_name: "PG" });




    const dispatch = useDispatch();
    const {
        notifications,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.notificationsScreenReducer);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = notifications;


    const _paginationHandler = (pageIndex) => {
        let module = "notifications";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerNotifications({ module: module, key, val }));
    }


    const _getList = () => {
        dispatch(getNotifications({
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
                                            <li className="table-data-1"> Claim Id </li>
                                            <li className="table-data-1"> Title </li>
                                            <li className="table-data-1"> Body </li>
                                            <li className="table-data-1"> Status </li>
                                            <li className="table-data-1"> Time </li>
                                        </ul>
                                        {list.map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {record?.ClaimId}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {record?.Notification_Titile}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {record?.Notification_Body}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {record?.Status}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {`${formatDateTime(record?.CreatedDate)?.toAmPM || ""} ${formatDateTime(record?.CreatedDate)?.toDate || ""}`}
                                                        </strong>
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

export default NotificationList
