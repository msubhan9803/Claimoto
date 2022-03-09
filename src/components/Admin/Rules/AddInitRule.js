import React from 'react';
import Select from 'react-select';


const AddInitRuleCom = () => {
    return (
        <div className='mb-10'>
            <h3>Add Initial Authority Matrix</h3>
            <form>


                {/* Product */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Name</h6>
                            <input type="text" className='' />
                        </div>
                    </div>
                </div>



                {/* Name and Type */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Make</h6>
                            <Select
                                value={""}
                                name="users"
                                placeholder="Select Make"
                                formatGroupLabel={"User"}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                options={[{ label: "All", value: 1 }, { label: "Toyota", value: 2 }]}
                                />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Model</h6>
                            <Select
                                value={""}
                                name="users"
                                placeholder="Select Model"
                                formatGroupLabel={"User"}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                options={[{ label: "All", value: 1 }, { label: "Yaris", value: 2 }]}
                                />
                        </div>
                    </div>
                </div>

                {/* Year */}
                <div className='row mt-2'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">From</h6>
                            <input type="number"  className="form-control" name="datepicker" id="datepicker" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">To</h6>
                            <input type="number"  className="form-control" name="datepicker" id="datepicker" />
                        </div>
                    </div>
                </div>


                {/* Repair Optionx */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Repair Options</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Garage</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
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
                                name="users"
                                placeholder="Select Products"
                                formatGroupLabel={"User"}
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
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                options={[{ label: "User 1", value: 2 }]}
                                />
                        </div>
                    </div>
                </div>





                <div className="form-group">
                    <h6 className="ltnd__title-2 my-3">Remarks</h6>
                    <textarea rows={4} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddInitRuleCom;