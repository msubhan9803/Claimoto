import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchComponent from './Search'
import ExportComponent from './Export'
import SortComponent from './Sort'


function Header({ name, search_options, search_text, search_option, sort_name }) {


    const _handleChange = () => {

    }



    const _download = () => {

    }




    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>{name} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header-middle-area end */}

                </div>
                {/* <!-- Body Content Area Inner Start --> */}

                <div className="">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter">
                        <div className="row">
                            <div className="col-lg-5">
                                <SearchComponent search_options={search_options} search_text={search_text} search_option={search_option} />
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <ExportComponent />
                                        <SortComponent sort_options={[]} sort_name="" />

                                        <li>
                                            <div className="btn-wrapper text-center mt-0 d-none">
                                                {/* <CSVExport ref={csv_export} data={{ header:  _exportData()?.header, csv_data: _exportData()?._data }} file_name={_exportData()?.file_name || ""} /> */}
                                                {/* <ExportCSV ref={excle_export} data={_exportData()?._data} file_name={_exportData()?.file_name || ""} /> */}

                                                {/* <ExcleExport /> */}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <a
                                                    // onClick={() => _toggleModal("add")}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add Service
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default Header;
