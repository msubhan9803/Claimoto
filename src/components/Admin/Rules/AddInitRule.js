import React from 'react';


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
                            <select className="form-control">
                                <option>Toyota</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Model</h6>
                            <select className="form-control">
                                <option>Yaris</option>
                                <option>GMS</option>
                            </select>
                        </div>
                    </div>
                </div>

                <h6 className="ltnd__title-2 my-3">Year</h6>


                {/* Year */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">From</h6>
                            <select className="form-control">
                                <option>2012</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">To</h6>
                            <select className="form-control">
                                <option>2022</option>
                            </select>
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
                                <label className="form-check-label" for="inlineRadio1">Garage</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Agency</label>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Product */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Product (s)</h6>
                            <select className="form-control">
                                <option>XYZ</option>
                                <option>ABC</option>
                            </select>
                        </div>
                    </div>
                </div>



                {/* Assign TO */}
                <div className='row'>
                    <div className='col-12'>
                        <div className="form-group">
                            <h6 className="ltnd__title-2 my-3">Assign To</h6>
                            <select className="form-control">
                                <option>XYZ</option>
                                <option>ABC</option>
                            </select>
                        </div>
                    </div>
                </div>





                <div className="form-group">
                    <h6 className="ltnd__title-2 my-3">Details</h6>
                    <textarea rows={4} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddInitRuleCom;