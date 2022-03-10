import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getUsers } from 'store/actions/rules';
import { getModels } from 'store/actions/rules';
import { getProducts } from 'store/actions/rules';
import { getMakes } from 'store/actions/rules';
import { handleAddRulesInputValue } from 'store/actions/rules';


const AddInitRuleCom = () => {
    let dispatch = useDispatch();
    let { initials } = useSelector(state => state.addRuleScreenReducer);
    let { values, makes, models, users, products } = initials;
    let { name,
        make,
        model,
        from,
        to,
        garage,
        agency,
        selected_products,
        user,
        remarks } = values;


    const _changeVal = ({ name, value }) => {
        let objName = "initials";
        dispatch(handleAddRulesInputValue({ name, value, objName }))
    }


    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        _changeVal({ name, value });
    }

    const _inputChangeHandler = (value, name) => {
        switch (name) {
            case "make":
                dispatch(getMakes(value));
                break;

            case "model":
                dispatch(getModels(value));

                break;

            case "product":
                dispatch(getProducts(value));

                break;

            case "user":
                dispatch(getUsers(value));

                break;
        }
    }

    useEffect(() => {

    }, []);


   

    return (
        <div className='mb-10'>
            <h3>Add Initial Authority Matrix</h3>
            <form>


                {/* Product */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Name</h6>
                            <input type="text" className='' name='name' onChange={_handleChange} value={name} />
                        </div>
                    </div>
                </div>



                {/* Name and Type */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Make</h6>
                            <Select
                                value={make}
                                name="make"
                                placeholder="Select Make"
                                onInputChange={(val) => _inputChangeHandler(val, "make")}
                                formatGroupLabel={"User"}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                onChange={(value)=> _changeVal({name:"make", value})}
                                // components={animatedComponents}
                                options={[{ label: "All", value: 0 }].concat(makes.map(make => {return {label: make?.MakeName, value:make?.Id } }))}
                            />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Model</h6>
                            <Select
                                value={model}
                                name="model"
                                placeholder="Select Model"
                                formatGroupLabel={"model"}
                                onInputChange={(val) => _inputChangeHandler(val, "model")}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                onChange={(value)=> _changeVal({name:"model", value})}
                                // components={animatedComponents}
                                options={[{ label: "All", value: 0 }].concat(makes.map(make => {return {label: make?.ModelName, value:make?.Id } }))}
                            />
                        </div>
                    </div>
                </div>

                {/* Year */}
                <div className='row mt-2'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">From</h6>
                            <input type="number" onChange={_handleChange} value={from} name="from" className="form-control" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">To</h6>
                            <input type="number" onChange={_handleChange} value={to} name="to" className="form-control" />
                        </div>
                    </div>
                </div>


                {/* Repair Optionx */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Repair Options</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onChange={() => _changeVal({ name: "garage", value: !garage })} checked={garage} id="inlineRadio1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Garage</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onChange={() => _changeVal({ name: "agency", value: !agency })} checked={agency} id="inlineRadio2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Agency</label>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Product */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Product (s)</h6>
                            <Select
                                value={""}
                                name="products"
                                placeholder="Select Products"
                                formatGroupLabel={"product"}
                                onInputChange={(val) => _inputChangeHandler(val, "product")}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                isMulti
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                options={[{ label: "All", value: 1 }, { label: "Yaris", value: 2 }]}
                            />
                        </div>
                    </div>
                </div>



                {/* Assign TO */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Assign To</h6>
                            <Select
                                value={""}
                                name="users"
                                placeholder="Select User"
                                formatGroupLabel={"User"}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                onInputChange={(val) => _inputChangeHandler(val, "user")}
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                options={[{ label: "User 1", value: 2 }]}
                            />
                        </div>
                    </div>
                </div>





                <div className="form-group">
                    <h6 className="ltnd__title-2 my-3">Remarks</h6>
                    <textarea rows={4} onChange={_handleChange} name="remarks" className="form-control" id="exampleFormControlTextarea1" ></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddInitRuleCom;