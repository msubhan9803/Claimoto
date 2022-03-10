import React, {useEffect} from 'react';
import Select from 'react-select';


const AddRuleAfterCom = () => {

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
                            <input type="text" className="form-control" id="exampleFormControlTextarea1"  />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Type</h6>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Claim Amount</label>
                            </div>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Service Amount</label>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 className="ltnd__title-2 my-3">Amount   </h6>


                {/* Amount */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-1">From</h6>
                            <input min={0} type="number" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-1">To</h6>
                            <input min={1} type="number" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                </div>



                <h6 className="ltnd__title-2 mt-3">Services (50)    </h6>



                {/* services */}
                <div className='row'>
                    <div className='col-12'>
                    <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="services" id="inlineRadio3" value="include_services" />
                                <label className="form-check-label" for="inlineRadio3">Include Services</label>
                            </div>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="services" id="inlineRadio4" value="exclude_services" />
                                <label className="form-check-label" for="inlineRadio4">Exclude Services</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 '>

                        <Select
                            value={""}
                            name="services"
                            closeMenuOnSelect={false}
                            className="mt-1"
                            // onChange={_handleMultipleSelect}
                            // components={animatedComponents}
                            isMulti
                            options={[{ label: "All", value: 0 }]}
                        />


                    </div>
                </div>



                {/* Assign TO */}
                <div className='row'>
                    <div className='col-12'>
                        <h6 className="ltnd__title-2 my-3">Assign To</h6>
                    </div>

                    <div className='col-4'>
                    {/* <h6 className="ltnd__title-4 mt-2"> </h6> */}
                        <Select
                            value={{ label: "Auto", value: 1 }}
                            name="users"
                            formatGroupLabel={"option"}
                            closeMenuOnSelect={false}
                            className="mt-1"
                            // onChange={_handleMultipleSelect}
                            // components={animatedComponents}
                            options={[{ label: "Auto", value: 1 }, { label: "Manual", value: 2 }]}
                        />

                    </div>

                    <div className='col-8'>
                        {/* <h6 className="ltnd__title-4 mt-2">Select User</h6> */}
                        <div className="form-group">
                            <Select
                                value={""}
                                name="users"
                                placeholder="Select User"
                                formatGroupLabel={"User"}
                                closeMenuOnSelect={false}
                                className="mt-1"
                                // onChange={_handleMultipleSelect}
                                // components={animatedComponents}
                                isMulti
                                options={[{ label: "System", value: 1 }, { label: "User 1", value: 2 }]}
                                />
                        </div>
                    </div>
                </div>






                <div className="form-group">
                    <h6 className="ltnd__title-2 my-3">Remarks</h6>
                    <textarea rows={4} className="form-control" id="exampleFormControlTextarea1"  ></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddRuleAfterCom;