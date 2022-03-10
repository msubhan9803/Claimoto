import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getServices } from 'store/actions/rules';
import { getUsers } from 'store/actions/rules';
import { handleAddRulesInputValue } from 'store/actions/rules';


const AddRuleAfterCom = () => {
    let dispatch = useDispatch();
    const [comState, setComState] = useState({
        values: {
            service: "",
            user: ""
        }
    })
    let { afters } = useSelector(state => state.addRuleScreenReducer);
    let { values, users, services } = afters;
    let {
        name,
        type,
        from,
        to,
        service_type,
        assign_to,
        selected_services,
        user,
        remarks,
    } = values;


    const _changeVal = ({ name, value }) => {
        let objName = "afters";
        dispatch(handleAddRulesInputValue({ name, value, objName }))
    }


    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        _changeVal({ name, value });
    }

    const _inputChangeHandler = (value, name) => {
        if (value.length > 1) {
            switch (name) {
                case "user":
                    dispatch(getUsers(value));
                    break;

                case "service":
                    dispatch(getServices(value));

                    break;
            }
        }

        setComState({
            ...comState,
            values: {
                ...comState.values,
                [name]: value
            }
        })


    }



    useEffect(() => {

    }, []);



    return (
        <div className='mb-10'>
            <h3>Add After Assessment Authority Matrix</h3>
            <form>
                {/* Name and Type */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Name</h6>
                            <input onChange={_handleChange} name="name" value={name} type="text" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Type</h6>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" onChange={() => _changeVal({ name: "type", value: "claim" })} checked={type === "claim"} type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Claim Amount</label>
                            </div>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions " onChange={() => _changeVal({ name: "type", value: "service" })} checked={type === "service"} id="inlineRadio2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Service Amount</label>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 className="ltnd__title-2 my-3">Amount   </h6>


                {/* Amount */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-1">From Year</h6>
                            <input min={0} value={from} type="number" name="from" onChange={_handleChange} className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-1">To Year</h6>
                            <input min={1} value={to} type="number" name="to" onChange={_handleChange} className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                </div>



                <h6 className="ltnd__title-2 mt-3">Services  ({selected_services.length})  </h6>



                {/* services */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" onChange={() => _changeVal({ name: "service_type", value: "include" })} checked={service_type === "include"} type="radio" name="inlineRadioOptions1" id="inlineRadio3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Include Amount</label>
                            </div>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions1" onChange={() => _changeVal({ name: "service_type", value: "exclude" })} checked={service_type === "exclude"} id="inlineRadio4" />
                                <label className="form-check-label" htmlFor="inlineRadio4">Exclude Service</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 '>

                        <Select
                            value={selected_services}
                            name="selected_services"
                            closeMenuOnSelect={false}
                            className="mt-1"
                            onChange={(value) => {
                                _changeVal({ name: "selected_services", value })
                            }}
                            inputValue={comState.values.service}
                            onInputChange={(val) => _inputChangeHandler(val, "service")}
                            isMulti
                            options={services.map(service => { return { label: service.Service, value: service.Id }}) || []}
                            />


                    </div>
                </div>



                {/* Assign TO */}
                <div className='row'>
                    <div className='col-12'>
                        <h6 className="ltnd__title-2 my-3">Assign To</h6>
                    </div>

                    <div className='col-4'>
                        <Select
                            value={assign_to}
                            formatGroupLabel={"option"}
                            closeMenuOnSelect={true}
                            className="mt-1"
                            onChange={(value) => _changeVal({ name: "assign_to", value })}
                            options={[{ label: "Auto", value: 1 }, { label: "Manual", value: 2 }]}
                        />

                    </div>

                    <div className='col-8'>
                        {assign_to?.value !== 1 &&
                            <div className="form-group">
                                <Select
                                    value={user}
                                    name="users"
                                    placeholder="Select User"
                                    formatGroupLabel={"User"}
                                    closeMenuOnSelect={false}
                                    className="mt-1"
                                    onChange={(value) => {
                                        _changeVal({ name: "user", value })
                                    }}
                                    inputValue={comState.values.user}
                                    onInputChange={(val) => _inputChangeHandler(val, "user")}
                                    options={[{ label: "All", value: 0 }].concat(users.map(user => { return { label: user?.UserName, value: user?.UserId } }))}
                                    />
                            </div>
                        }
                    </div>
                </div>






                <div className="form-group">
                    <h6 className="ltnd__title-2 my-3">Remarks</h6>
                    <textarea rows={4} value={remarks} onChange={_handleChange} name="remarks" className="form-control" id="exampleFormControlTextarea1"  ></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddRuleAfterCom;