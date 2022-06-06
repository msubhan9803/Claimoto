import React, { useState, useEffect, useRef, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CSVExport from 'components/Export/CSV';
import ExportCSV from 'components/Export/Excle';
import { getNotifications } from 'store/actions/notifications';
import { handleNotificationsInputValue } from 'store/actions/notifications';
import NotificationList from 'components/Notifications/NotificationList';

function Notifications() {

    let excel_export = createRef();
    let csv_export = createRef();


    let dispatch = useDispatch();


        //Component State
        let initialState = {
            openModal: false,
            download:""
        }
    
        const [comState, setComState] = useState(initialState);
    


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { search_options, search_option, search_text, sort_type, sort_name, notifications } = useSelector(state => state.notificationsScreenReducer);
    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = notifications;





    const _download = (event) => {
        switch (parseInt(event.target.value)) {
            case 1:
                csv_export.current.link.click();
                break;
            case 2:
                excel_export.current.click();
                break;

            default:
                break;
        }
    }

    const _exportData = () => {
        return { header: Object.keys(notifications.list), _data: notifications.list, file_name: `notifications - page # ${notifications.page_index}` };
    }



    const _getNotificationsList = () => {

        dispatch(getNotifications({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));

    }






    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleNotificationsInputValue({ name, value }));
    }



    useEffect(() => {
        if (search_text?.length > 2 && search_option !== "" || search_text === "") {
            _getNotificationsList();
        }
    }, [search_text, search_option, sort_name]);



    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Notifications </h2>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    {/* header-middle-area end */}

                </div>
                {/* <!-- Body Content Area Inner Start --> */}

                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    <form action="#" _lpchecked={1}>
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
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <li>
                                            <div className="short-by text-center">
                                                <select onChange={_download} name="sort_name" value={initialState.download} className="nice-select">
                                                    <option disabled value={""}>Download</option>
                                                    <option value={1} >
                                                        CSV
                                                    </option>
                                                    <option value={2} >
                                                        Excel
                                                    </option>

                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_name" value={sort_name} className="nice-select">
                                                    <option disabled value={""}>Sort By</option>
                                                    {search_options.map((op) => (
                                                        <option key={op.value} value={op.value}>{op.label}</option>

                                                    ))}
                                                </select>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="btn-wrapper text-center mt-0 d-none">
                                                <CSVExport ref={csv_export} data={{ header: _exportData()?.header, csv_data: _exportData()?._data }} file_name={_exportData()?.file_name || ""} />
                                                <ExportCSV ref={excel_export} data={_exportData()?._data} file_name={_exportData()?.file_name || ""} />

                                                {/* <ExcleExport /> */}
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT AREA END */}

                    {/* SELECT AVAILABILITY AREA START */}
                    <div className="select-availability-area pb-120">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ltnd__policies-table start */}
                                <div className="select-availability-area pb-120">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <NotificationList />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Notifications;
