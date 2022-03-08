import React from 'react';


const AddRuleCom = () => {
    return (
        <div className='mb-10'>
            <h1>Add Rule</h1>
            <form>
                {/* Name and Type */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Name</h6>
                            <input type="text" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Type</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Auto</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Manual</label>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 className="ltnd__title-2 my-2">Amount   </h6>


                {/* Amount */}
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">From</h6>
                            <input min={0} type="number" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">To</h6>
                            <input min={1} type="number" className="form-control" id="exampleFormControlTextarea1" />
                        </div>
                    </div>
                </div>



                <h6 className="ltnd__title-2 my-2">Services (50)    </h6>


                {/* services */}
                <div className='row'>
                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Includes (4)
                                <span role="button" style={{ float: "right" }}>Select All</span>
                            </h6>
                            <select className="form-control" id="exampleFormControlTextarea1" >
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                                <option>Service 4</option>
                                <option>Service 5</option>
                            </select>

                            <ul class="list-group">
                                <li class="list-group-item active">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>

                        </div>
                    </div>

                    <div className='col-6 '>
                        <div className="form-group">
                            <h6 className="ltnd__title-4 mt-2">Excludes (8)
                                <span role="button" style={{ float: "right" }}>Select All</span>
                            </h6>
                            <select className="form-control" id="exampleFormControlTextarea1" >
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                                <option>Service 4</option>
                                <option>Service 5</option>
                            </select>

                            <ul class="list-group">
                                <li class="list-group-item active">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>





                <div className="form-group">
                    <h6 className="ltnd__title-4 mt-2">Details</h6>
                    <textarea rows={4} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
            </form>
        </div>
    )
}


export default AddRuleCom;