import React, { useState, useEffect, useRef, createRef } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { handleProviderInputValue } from 'store/actions/provider';
import ProviderAddModal from 'components/Admin/Providers/ProviderAddModal';
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getGarages } from 'store/actions/provider';
import { getAgency } from 'store/actions/provider';
import { getCarAgency } from 'store/actions/provider';
import { getSurveyor } from 'store/actions/provider';
import CSVExport from 'components/Export/CSV';
import ExportCSV from 'components/Export/Excle';

function Provider() {

    let excle_export = createRef();
    let csv_export = createRef();


    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { tabs, search_options, search_option, search_text, sort_type, sort_name, surveyorers, garages, car_agencies, agencies } = useSelector(state => state.providersScreenReducer);

    //Component State
    let initialState = {
        openModal: false,
        download:""
    }

    const [comState, setComState] = useState(initialState);


    //Actions
    const _handleComActions = () => {
        // dispatch(getModules());
        let action = searchParams.get("action");
        let activeTab = searchParams.get("tab");
        switch (action) {
            case "add":
                setComState((comState) => ({
                    ...initialState,
                    openModal: true,
                }));
                break;
            default:
                setComState(initialState);
                break;
        }
        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }

        // if(action){
        //     document.body.style.overflow = 'hidden';
        // }
        // else{
        //     setTimeout(() => {
        //         document.body.style.overflow = 'scroll';
        //     }, 700);
        // }
    }

    const _download = (event) => {
        switch (parseInt(event.target.value)) {
            case 1:
                csv_export.current.link.click();
                break;
            case 2:
                excle_export.current.click();
                break;

            default:
                break;
        }
    }

    const _exportData = () => {
        switch (searchParams.get("tab")) {
            case "0":
                return { header: Object.keys(garages.list), _data: garages.list, file_name: `garages - page # ${garages.page_index}` };
                break;

            case "1":
                return { header: Object.keys(agencies.list), _data: agencies.list, file_name: `agencies - page # ${agencies.page_index}` };
                break;

            case "2":
                return { header: Object.keys(car_agencies.list), _data: car_agencies.list, file_name: `car agencies - page # ${car_agencies.page_index}` };
                break;

            case "3":
                return { header: Object.keys(surveyorers.list), _data: surveyorers.list, file_name: `surveyor - page # ${surveyorers.page_index}` };
                break;

            default:
                return { header: Object.keys(garages.list), _data: garages.list, file_name: `garages - page # ${garages.page_index}` };
                break;
        }
    }



    const _getProvidersList = () => {
        let records_per_page = 10;
        let page_index = 1;
        switch (searchParams.get("tab")) {
            case "0":
                records_per_page = garages.records_per_page;
                page_index = garages.page_index;
                dispatch(getGarages({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            case "1":
                records_per_page = agencies.records_per_page;
                page_index = agencies.page_index;
                dispatch(getAgency({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            case "2":
                records_per_page = car_agencies.records_per_page;
                page_index = car_agencies.page_index;
                dispatch(getCarAgency({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            case "3":
                records_per_page = surveyorers.records_per_page;
                page_index = surveyorers.page_index;
                dispatch(getSurveyor({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            default:
                dispatch(getGarages({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;
        }
    }


    //toggleModal
    const _toggleModal = (action) => {
        if (searchParams.has("action")) {
            searchParams.delete("action");
            setSearchParams(searchParams)
        }
        else {
            searchParams.set("action", action);
            setSearchParams(searchParams)
        };
    }




    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleProviderInputValue({ name, value }));
    }


    useEffect(() => {
        _handleComActions();
    }, [searchParams]);


    useEffect(() => {
        if (search_text?.length > 2 && search_option !== "" || search_text === "") {
            _getProvidersList();
        }
    }, [search_text, search_option, sort_name]);



    return (
        <React.Fragment>
            <ProviderAddModal toggleModal={() => _toggleModal("add")} openModal={comState.openModal} />
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Providers </h2>
                                </div>
                            </div>
                            <div className="col-lg-3 align-self-center text-end">
                                <div className="ltnd__date-area d-none">
                                    <div className="ltn__datepicker">
                                        <div className="ltn_datepicker-title">
                                            <span>Date</span>
                                        </div>
                                        <div className="input-group date" data-provide="datepicker">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Select Date"
                                            />
                                            <div className="input-group-addon">
                                                <i className="far fa-calendar-alt" />
                                            </div>
                                        </div>
                                    </div>
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
                                                        Excle
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
                                                <CSVExport ref={csv_export} data={{ header:  _exportData()?.header, csv_data: _exportData()?._data }} file_name={_exportData()?.file_name || ""} />
                                                <ExportCSV ref={excle_export} data={_exportData()?._data} file_name={_exportData()?.file_name || ""} />

                                                {/* <ExcleExport /> */}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <a
                                                    onClick={() => _toggleModal("add")}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add
                                                </a>
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
                                            <TabsWrapper>
                                                <TabsHeader tabs={tabs} />
                                                <TabContent>
                                                    {getAllowActions({ permissions, module_name: tabs[parseInt(searchParams.get("tab"))]?.short }) ?
                                                        tabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4>
                                                        :
                                                        <ADAnimation />
                                                    }
                                                    {/* {tabs.map((tab, index) => (
                                                        <Tab key={tab.id} tab={tab} index={index}>
                                                            {tab.component}
                                                        </Tab>
                                                    ))} */}
                                                </TabContent>
                                            </TabsWrapper>
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

export default Provider
