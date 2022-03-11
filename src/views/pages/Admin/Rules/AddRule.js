import React, { useEffect } from 'react';
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useDispatch, useSelector } from 'react-redux';
import TabContent from 'components/Tabs/TabsContent';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { getServices, getCountries, clearAddProviderState, setProviderDetails } from 'store/actions/provider';
import { msgAlert } from 'functions';
import { successAlert } from 'functions';
import { addProvider } from 'store/actions/provider';
import Loader from 'components/Loader/Loader';
import { confirmAlert } from 'functions';
import { deleteProvider } from 'store/actions/provider';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from 'components/Admin/Providers/Map/MapComponent';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import AddInitRuleCom from 'components/Admin/Rules/AddInitRule';
import AddRuleAfterCom from 'components/Admin/Rules/AddAfterRule';
import { save_initial } from 'store/actions/rules';
import { save_after } from 'store/actions/rules';
import { getInitRuleDetails } from 'store/actions/rules';
import { getAfterRuleDetails } from 'store/actions/rules';
import { deleteRule } from 'store/actions/rules';

const AddRule = () => {
    let { type, id } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();


    //Selector
    let { initials, afters, rule_loading, edit_index } = useSelector(state => state.addRuleScreenReducer);



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let rules_actions = getAllowActions({ permissions, module_name: "RE" });;








    const _saveRule = () => {
        parseInt(type) === 1 ? _saveInitial() : _saveAfter()
    };


    const _saveInitial = () => {
        dispatch(save_initial({ ...initials.values, id }, navigate));
    }

    const _saveAfter = () => {
        dispatch(save_after({ ...afters.values, id }, navigate));
    }


    const _cancelAction = () => {
        navigate('/admin/rules');
    }


    const _handleCancel = () => {
        confirmAlert({
            title: "Are you sure?",
            text: "",
            buttonText: "Yes, Go Back",
            action: _cancelAction
        });
    }

    const _deleteAction = () => {
        dispatch(deleteRule(navigate, id, type));
    }


    const _handleDelete = () => {
        confirmAlert({
            title: "Are you sure?",
            text: "",
            buttonText: "Yes, Deactivate it",
            action: _deleteAction
        });
    }





    useEffect(() => {
        // dispatch(getServices());
        // dispatch(getCountries());
        // return () => {
        //     dispatch(clearAddProviderState());
        // };
        if (id) {
            type === "1" ? dispatch(getInitRuleDetails(parseInt(id))) : dispatch(getAfterRuleDetails(parseInt(id)));
        }
    }, [type]);








    return (
        <React.Fragment>
            {rule_loading ?
                <div style={{ textAlign: "center" }}>
                    <LoaderAnimation />
                </div>
                :
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh ltn__body-height-800 body-bg-1--- pb-80---">

                    <div className="container ltnd__block-area pt-40 pb-80">

                        {parseInt(type) === 1 ?
                            <AddInitRuleCom /> : <AddRuleAfterCom />
                        }

                    </div>

                    <footer className="ltnd__footer-1 fixed-footer-1  bg-white" >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__footer-1-inner">
                                        <div className="ltnd__left btn-normal">
                                            {id &&
                                                <button onClick={_handleDelete} className="btn "><i className="ti-trash"></i> Delete</button>
                                            }
                                        </div>
                                        <div className="ltnd__right btn-normal">
                                            <div className="btn-wrapper">
                                                {/* <Link to="/admin/provider" ><i className="ti-angle-left"></i> Cancel</Link> */}
                                                <button onClick={_handleCancel} className="btn " ><i className="ti-angle-left"></i> Cancel</button>
                                                {/* <a href="providers.html"><i className="ti-angle-left"></i> Cancel</a> */}
                                                { // (_checkPermissionsOfProvider("INSERT") || _checkPermissionsOfProvider("UPDATE")) &&
                                                }
                                                <button role="button" onClick={_saveRule} className="btn theme-btn-1 btn-round-12">{"Save"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            }
        </React.Fragment>
    )
}

export default AddRule;