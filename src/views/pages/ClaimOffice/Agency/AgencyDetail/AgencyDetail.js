import React from 'react'

export default function AgencyDetail() {
  return (
    <div class="body-bg-1 pb-80">  
        <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
            <div class="ltnd__header-middle-area mt-30">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="ltnd__page-title-area">
                            <p class="page-back-btn"><a href="product.html"><i class="icon-left-arrow-1"></i> Back</a></p>
                          <h2>Liability coverage</h2> 
                        </div>
                    </div>
                    <div class="col-lg-3 align-self-center text-end">
                        <div class="btn-wrapper btn-inline text-center mt-0">
                            <a href="#" class="btn theme-btn-1 btn-round-12 btn-2" title="Quick View" data-bs-toggle ="modal" data-bs-target="#adding_modal">
                                Edit
                            </a>
                        </div>
                        <div class="ltnd__date-area d-none">
                            <div class="ltn__datepicker">
                                <div class="ltn_datepicker-title">
                                    <span>Date</span>
                                </div>
                                <div class="input-group date" data-provide="datepicker">
                                    <input type="text" class="form-control" placeholder="Select Date" />
                                    <div class="input-group-addon">
                                        <i class="far fa-calendar-alt"></i>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="body-content-area-inner">

            <div class="ltnd__block-area">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="ltnd__block-item mt-30">
                            <div class="ltn__block-item-info">
                                <div class="ltnd__edit-table-logo-title mb-20">
                                    <div class="ltnd__edit-table-logo">
                                        <img src="img/icons/mc/png/6.png" alt="#" />
                                    </div>
                                    <div class="ltnd__edit-table-title">
                                        <h3>Agent orange </h3>
                                        <p class="ltn__color-1">15869</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">                                        
                                        <h6 class="ltnd__title-3">Point of contact</h6>
                                        <h6>Yasmin Ali</h6>
                                        <p>079 079 1189</p>
                                    </div>
                                    <div class="col-lg-8">                                        
                                        <h6 class="ltnd__title-3">Main HQ</h6>
                                        <p>Dhahiyat Nakheel <br />
                                            Prince Nails' bent Asem St، Amman, Jordan <br />
                                            Apartment 67, 2nd floor  <br />
                                            Postal code 11710</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">                        
                        <div class="google-map ltnd__garage-details-map mt-30">
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    
                        </div>
                    </div>
                </div>
            </div>

            <div class="ltnd__block-area">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ltnd__block-item mt-30">
                            <div class="ltnd__title ltnd__title-2">
                                <h4>Services</h4>
                            </div>
                            <div class="ltn__block-item-info">
                                <div class="row">
                                    <div class="col-lg-12">                                        
                                        <div class="garage-details-single-item mb-40">
                                            <h6 class="ltnd__title-3 mb-10">Battery</h6>
                                            <ul>
                                                <li>The battery in a car is a rechargeable. It supplies power (electric energy) to the car. Normally this battery is used to help provide power to start the car and then it is used only when extra power is needed. The car battery alone is can't supply power to all the electrical systems. The alternator does this.</li>
                                            </ul>
                                        </div>
                                        <div class="garage-details-single-item mb-40">
                                            <h6 class="ltnd__title-3 mb-10">Brakes</h6>
                                            <ul>
                                                <li>The battery in a car is a rechargeable. It supplies power (electric energy) to the car. Normally this battery is used to help provide power to start the car and then it is used only when extra power is needed. The car battery alone is can't supply power to all the electrical systems. The alternator does this.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="ltnd__footer-1 fixed-footer-1 bg-white mt-80 d-none">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ltnd__footer-1-inner">
                            <div class="ltnd__left btn-normal">
                                <a href="#" class="ltn__color-1"><i class="ti-trash"></i> Delete</a>
                            </div>
                            <div class="ltnd__right btn-normal">
                                <div class="btn-wrapper">
                                    <a href="product.html" class="ltn__color-1"><i class="ti-angle-left"></i> Back</a>
                                    <a href="#" class="btn theme-btn-1 btn-round-12">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>
  )
}
