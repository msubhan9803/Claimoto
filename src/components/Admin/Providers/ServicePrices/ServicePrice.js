import React, { useEffect, useState, useReducer } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { capitalizeFirstLetter } from 'functions';
import Header from 'components/Header/Header';
import { getProviderServicesPrices, deleteProviderServicePrice, setValuesProviderServices } from 'store/actions/provider/price';
import ServicePriceAddModal from './AddServicePrice';
import { getAllowActions } from 'functions';
import { confirmAlert } from 'functions';
import { sortingClientSide } from 'functions';
import { formatDateTime } from 'functions';

const ViewProviderServices = () => {
    const { provider_id, type, service_id } = useParams();
    const { list, loading_list, search_options, sort_name, search_option, search_text } = useSelector(state => state.providerServicesPriceScreenReducer);
    const [state, action_dispatch] = useReducer(_reducer,list);


    function _reducer(state, action) {
        switch (action.type) {
            case 'search':
                if (search_option !== "" && search_text !== "") {
                    let new_list = list.filter(srv => srv[search_option].toUpperCase().startsWith(search_text.toUpperCase()));
                    return new_list;
                }
                else {
                    return list;
                }
            case 'sort':
                if (sort_name === "Year" || sort_name === "Price" || sort_name === "Discount") {
                    return state.sort(sortingClientSide(sort_name, true, parseInt))
                } else {
                    return state.sort(sortingClientSide(sort_name, false, (a) => a.toUpperCase()))
                }
            case 'set': {
                return list;
            }
            default:
                return list;
        }
    }


    const _exportData = () => {
        return { header: Object.keys(state), _data: state, file_name: `service_provider` };
    }


    //Component State
    let initialState = {
        openProviderModal: false,
        openAccessModal: false,
        edit: false,
        view: false,
        id: null,
        services_loading: false,
    }
    const [comState, setComState] = useState(initialState);
    let [searchParams, setSearchParams] = useSearchParams();


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const _getProviderServiesPrice = () => {
        dispatch(getProviderServicesPrices(service_id))
    }

    useEffect(() => {
        if (service_id) {
            _getProviderServiesPrice();
        }

    }, [service_id, type]);



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    let provider_actions = getAllowActions({ permissions, module_name: "AUM" });


    //Actions
    const _handleComActions = () => {
        // dispatch(getModules());
        let action = searchParams.get("action");
        let id = searchParams.get("id");
        switch (action) {
            case "add_price":
                setComState((comState) => ({
                    ...initialState,
                    openProviderModal: true,
                    view: false,
                    edit: false
                }));
                break;

            case "edit_price":
                setComState((comState) => ({
                    ...initialState,
                    openProviderModal: true,
                    view: false,
                    edit: true,
                    id: id
                }));
                break;

            default:
                setComState(initialState);
                break;
        }


        if (action) {
            document.body.style.overflow = 'hidden';
        }
        else {
            setTimeout(() => {
                document.body.style.overflow = 'scroll';
            }, 300);
        }
    }



    //toggleModal
    const _toggleModal = (action, id) => {

        // dispatch(clearInputValues())

        if (searchParams.has("action")) {
            searchParams.delete("action");
            searchParams.delete("id");
            searchParams.delete("edit");
            setSearchParams(searchParams);
        }
        else {
            if (id) {
                searchParams.set("id", id);
            }
            searchParams.set("action", action);
            setSearchParams(searchParams);
        };
    }




    const _deleteAction = (id) => {
        dispatch(deleteProviderServicePrice(id, _getProviderServiesPrice));
    }


    const _deleteUser = (id) => {
        confirmAlert({
            title: "Are you sure?",
            text: "",
            buttonText: "Yes, Deactivate it",
            action: () => _deleteAction(id)
        });
    }


    const _handleChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        dispatch(setValuesProviderServices({ name, value }));
        if (name === "sort_name") {
            action_dispatch({ type: 'sort' });
        }
        else {
            action_dispatch({ type: 'search' });
        }
    }






    const _getProviderId = () => {
        switch (type) {
            case "garage":
                return 1
                break;

            case "agency":
                return 2
                break;

            case "replacement agency":
                return 3
                break;

            case "surveyor":
                return 4
                break;

            default:
                return 1
                break;
        }
    }

    useEffect(() => {
        _handleComActions();
    }, [searchParams]);

    useEffect(() => {
        action_dispatch({ type: "set" });
    }, [list])


    return (
        <>
            {comState.openProviderModal && <ServicePriceAddModal pre_actions={provider_actions} view={comState.view} edit={comState.edit} id={searchParams.get('id')}  toggleModal={() => _toggleModal("add_price", null)} openModal={comState.openProviderModal} provider_id={provider_id} service_id={service_id} getProviderServices={_getProviderServiesPrice} />}

            {loading_list ?
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



                        <Header search_options={search_options} sort_options={search_options} search_text={search_text} search_option={search_option} button_name="Add Price" sort_name={sort_name} name={`Price List`} handleChange={_handleChange} addButtonHandler={() => _toggleModal("add_price", null)} exportData={_exportData} />



                        <div className='row'>
                            <div className="col-lg-12 mt-4">
                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                        <ul className="ltn__select-availability-table-head">
                                            <li className="table-data-5">Make</li>
                                            <li className="table-data-5">Model </li>
                                            <li className="table-data-5">Year </li>
                                            <li className="table-data-4">Unit Cost</li>
                                            <li className="table-data-5">Discount </li>
                                            <li className="table-data-5">Start Date </li>
                                            <li className="table-data-5">End Date </li>
                                            <li className="table-data-7">Edit</li>
                                            <li className="table-data-7">Delete</li>
                                        </ul>
                                        {state.map(record => {
                                            return (
                                                <ul key={record?.PS_Price_Id} className="ltn__select-availability-table-row">
                                                    
                                                    <li className="table-data-5">{record?.MakeName || "All Makes"}</li>
                                                    <li className="table-data-5">{record?.ModelName || "All Model"}</li>
                                                    <li className="table-data-5">{record?.Year || "All Years"}</li>
                                                    <li className="table-data-4 text-primary">
                                                            {record?.Price || ""}
                                                    </li>
                                                    <li className="table-data-5">{`${record?.Discount}%` || ""}</li>
                                                    <li className="table-data-5">{`${formatDateTime(record?.Start_Date).date}   ` || ""}</li>
                                                    <li className="table-data-5">{`${formatDateTime(record?.End_Date).date}` || ""}</li>
                                                    <li role="button" onClick={() => _toggleModal("edit_price", record?.PS_Price_Id)} className="table-data-7 text-primary">
                                                        <strong className='text-primary'>
                                                            Edit
                                                        </strong>
                                                    </li>
                                                    <li role="button" onClick={() => _deleteUser(record?.PS_Price_Id)} className="table-data-7">
                                                        <strong className='text-danger'>
                                                            Delete
                                                        </strong>
                                                    </li>

                                                </ul>)
                                        })}

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


export default ViewProviderServices;