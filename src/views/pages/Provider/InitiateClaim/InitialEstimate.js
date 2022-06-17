import React from 'react'

export default function InitialEstimate() {
    return (
        <>
            <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                <div class="ltnd__header-middle-area mt-30">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="ltnd__page-title-area">
                                <p className="page-back-btn cursor-pointer">
                                    <span onClick={() => window.history.back()}>
                                        <i className="icon-left-arrow-1" />
                                        Back
                                    </span>
                                </p>
                                <h2>Initial estimate</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="body-content-area-inner">
                <div class="ltn__product-area ltn__product-gutter d-none">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="ltn__search-widget ltnd__product-search-widget mb-30">
                                <form action="#" _lpchecked="1">
                                    <input type="text" name="search" placeholder="Search product..." class="" />
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="ltn__shop-options ltnd__shop-options select-list-right">
                                <ul>
                                    <li>
                                        <div class="short-by text-center">
                                            <select class="nice-select">
                                                <option>Download</option>
                                                <option>Sort by </option>
                                                <option>Sort by new </option>
                                                <option>Sort by price</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="short-by text-center">
                                            <select class="nice-select">
                                                <option>Import</option>
                                                <option>Sort by </option>
                                                <option>Sort by new </option>
                                                <option>Sort by price</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="add-estimate-menu">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="add-estimate-menu-inner">
                                <form id="#" action="#" method="#" class="ltnd__form-1">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="input-item">
                                                <select class="nice-select">
                                                    <option><img src="img/icons/mc/png/11.png" alt="#" /> BMW</option>
                                                    <option><img src="img/icons/mc/png/11.png" alt="#" /> BMW 2</option>
                                                    <option><img src="img/icons/mc/png/11.png" alt="#" /> BMW</option>
                                                    <option><img src="img/icons/mc/png/11.png" alt="#" /> BMW</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="input-item">
                                                <select class="nice-select">
                                                    <option>BWM 7 series</option>
                                                    <option>Option 1 </option>
                                                    <option>Option 2 </option>
                                                    <option>Option 3 </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="input-item">
                                                <select class="nice-select">
                                                    <option>Break pad</option>
                                                    <option>Option 1 </option>
                                                    <option>Option 2 </option>
                                                    <option>Option 3 </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="input-item">
                                                        <select class="nice-select">
                                                            <option>OEM</option>
                                                            <option>Option 1 </option>
                                                            <option>Option 2 </option>
                                                            <option>Option 3 </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <a class="ltnd__scheduled-item-icon ml-0" href="#"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="select-availability-area pb-120">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap">
                                <div class="ltn__select-availability-table  d-none d-md-block">
                                    <ul class="ltn__select-availability-table-head">
                                        <li class="table-data-2">ID</li>
                                        <li class="table-data-1">Description</li>
                                        <li class="table-data-3 ltn__color-1">Article/ OEM</li>
                                        <li class="table-data-3">Brand</li>
                                        <li class="table-data-3">Quantity</li>
                                        <li class="table-data-3">Discount</li>
                                        <li class="table-data-3">Amount </li>
                                        <li class="table-data-3">Sub-total</li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row">
                                        <li class="table-data-2">134123</li>
                                        <li class="table-data-1 ltn__secondary-color"><strong>Windshield</strong></li>
                                        <li class="table-data-3 ltn__color-1---">2345-EDFJ</li>
                                        <li class="table-data-3">
                                            <img src="img/icons/mc/png/11.png" alt="#" />
                                            <strong>BMW</strong>
                                        </li>
                                        <li class="table-data-3">2</li>
                                        <li class="table-data-3">10%</li>
                                        <li class="table-data-3">50 </li>
                                        <li class="table-data-3">1700 KWD</li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row">
                                        <li class="table-data-2">134123</li>
                                        <li class="table-data-1 ltn__secondary-color---"><strong>Paint</strong></li>
                                        <li class="table-data-3 ltn__color-1---">2345-EDFJ</li>
                                        <li class="table-data-3">
                                            <img src="img/icons/mc/png/11.png" alt="#" />
                                            <strong>BMW</strong>
                                        </li>
                                        <li class="table-data-3">2</li>
                                        <li class="table-data-3">10%</li>
                                        <li class="table-data-3">50 </li>
                                        <li class="table-data-3">1700 KWD</li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row">
                                        <li class="table-data-2">134123</li>
                                        <li class="table-data-1 ltn__secondary-color"><strong>Windshield</strong></li>
                                        <li class="table-data-3 ltn__color-1---">2345-EDFJ</li>
                                        <li class="table-data-3">
                                            <img src="img/icons/mc/png/11.png" alt="#" />
                                            <strong>BMW</strong>
                                        </li>
                                        <li class="table-data-3">2</li>
                                        <li class="table-data-3">10%</li>
                                        <li class="table-data-3">50 </li>
                                        <li class="table-data-3">1700 KWD</li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row">
                                        <li class="table-data-2">134123</li>
                                        <li class="table-data-1 ltn__secondary-color"><strong>Windshield</strong></li>
                                        <li class="table-data-3 ltn__color-1---">2345-EDFJ</li>
                                        <li class="table-data-3">
                                            <img src="img/icons/mc/png/11.png" alt="#" />
                                            <strong>BMW</strong>
                                        </li>
                                        <li class="table-data-3">2</li>
                                        <li class="table-data-3">10%</li>
                                        <li class="table-data-3">50 </li>
                                        <li class="table-data-3">1700 KWD</li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row">
                                        <li class="table-data-2">134123</li>
                                        <li class="table-data-1 ltn__secondary-color"><strong>Windshield</strong></li>
                                        <li class="table-data-3 ltn__color-1---">2345-EDFJ</li>
                                        <li class="table-data-3">
                                            <img src="img/icons/mc/png/11.png" alt="#" />
                                            <strong>BMW</strong>
                                        </li>
                                        <li class="table-data-3">2</li>
                                        <li class="table-data-3">10%</li>
                                        <li class="table-data-3">50 </li>
                                        <li class="table-data-3">1700 KWD</li>
                                    </ul>
                                </div>
                                <div class="ltn__select-availability-table-responsive d-md-none">
                                    <ul class="ltn__select-availability-table-row-responsive-item">
                                        <li><span>Policy number</span> <span class="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                        <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                        <li><span>Identity</span> <span>15869632423</span></li>
                                        <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                        <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                        <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                        <li><span>Vehicle</span> <span><strong><a href="vehicle-details.html">Vehicle</a></strong></span></li>
                                        <li><span>Details</span> <span><a class="ltn__secondary-color" href="policies-details.html"><strong>Details</strong></a></span></li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row-responsive-item">
                                        <li><span>Policy number</span> <span class="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                        <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                        <li><span>Identity</span> <span>15869632423</span></li>
                                        <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                        <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                        <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                        <li><span>Vehicle</span> <span><strong><a href="vehicle-details.html">Vehicle</a></strong></span></li>
                                        <li><span>Details</span> <span><a class="ltn__secondary-color" href="policies-details.html"><strong>Details</strong></a></span></li>
                                    </ul>
                                    <ul class="ltn__select-availability-table-row-responsive-item">
                                        <li><span>Policy number</span> <span class="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                        <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                        <li><span>Identity</span> <span>15869632423</span></li>
                                        <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                        <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                        <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                        <li><span>Vehicle</span> <span><strong><a href="vehicle-details.html">Vehicle</a></strong></span></li>
                                        <li><span>Details</span> <span><a class="ltn__secondary-color" href="policies-details.html"><strong>Details</strong></a></span></li>
                                    </ul>
                                </div>
                                <div class="invoice-table-footer  float-start">
                                    <div class="invoice-table-footer-inner">
                                        <div class="single-content">
                                            <h1>50</h1>
                                            <p>Total claims</p>
                                        </div>
                                        <div class="single-content">
                                            <h1>1700 KWD</h1>
                                            <p>Total Amount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
