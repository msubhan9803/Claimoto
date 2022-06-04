import React, { useState, createRef, useEffect } from "react";
import PoliciesList from "components/ClaimOffice/Policies/PoliciesList/PoliciesList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProducType } from "store/actions/product";
import { SetPaginatedAgenciesGarages, HandleTableInputValue, ClearProviderListData } from "store/actions/claimAgencies";
import SortArray from "sort-array";
import Fuse from "fuse.js";
import Pagination from "components/Pagination/Pagination";
import { getAllowActions } from "functions";
import ADAnimation from "components/AccessDenied/ADAnimation";
import CSVExport from "components/Export/CSV";
import ExportExcle from "components/Export/Excle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import AgencyList from "components/ClaimOffice/Agencies/AgencyList";
import LoaderAnimation from "components/Loader/AnimatedLoaded";

function Agencies() {
  let providerTypeId = 2; // Agencies Provider primary key
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.claimAgenciesReducer.allProviders);
  const [isLoading, setIsLoading] = useState(true);
  const {
    isSuccess,
    allProviders,
    providerListTableFilterData,
    search_options
  } = useSelector((state) => state.claimAgenciesReducer);
  const {
    search_text,
    search_option,
    sort_name,
    sort_type,
    download,
    importAs,
    providers_per_page,
    providers_page_index,
    providers_count,
  } = providerListTableFilterData;
  //Refs
  let excle_export = createRef();
  let csv_export = createRef();

  useEffect(() => {
    _handleDataFetching();

    return () => dispatch(ClearProviderListData());
  }, []);

  const _handleDataFetching = () => {
    setIsLoading(true);
    dispatch(SetPaginatedAgenciesGarages(
      providerTypeId,
      providers_per_page,
      providers_page_index,
      search_text,
      search_option,
      sort_name,
      sort_type
    ));
    setTimeout(() => {
      setIsLoading(false);
    }, 700)
  }

  useEffect(() => {
    dispatch(SetPaginatedAgenciesGarages(
      providerTypeId,
      providers_per_page,
      providers_page_index,
      search_text,
      search_option,
      sort_name,
      sort_type
    ));
  }, [
    search_text,
    search_option,
    sort_name,
    sort_type,
    providers_per_page,
    providers_page_index
  ]);

  const _handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(HandleTableInputValue({ name, value }));
  };

  const _download = (event) => {
    switch (parseInt(event.target.value)) {
      case 1:
        csv_export.current.link.click();
        break;
      case 2:
        excle_export.current.click();
        break;

      default:
        break;
    }
  };

  const _exportData = () => {
    return {
      header: Object.keys(providers),
      _data: providers,
      file_name: `providers`,
    };
  };

  const _paginatedListHandler = (pageIndex) => {
    dispatch(
      HandleTableInputValue({ name: "providers_page_index", value: pageIndex })
    );
  };

  const _handleGridRefresh = () => {
    _handleDataFetching();
  }

  return (
    <React.Fragment>
      <div className="body-wrapper">
        <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div className="ltnd__header-middle-area mt-30">
            <div className="row">
              <div className="col-lg-9">
                <div className="ltnd__page-title-area">
                  <h2>Agencies ({providers.length})</h2>
                </div>
              </div>
              <div className="col-lg-3 align-self-center text-end">
                <div className="ltnd__date-area d-none">
                  <div className="ltn__datepicker">
                    <div className="ltn_datepicker-title">
                      <span>Date</span>
                    </div>
                    <div className="input-group date" data-provide="datepicker">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Date"
                      />
                      <div className="input-group-addon">
                        <i className="far fa-calendar-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-middle-area end */}
        </div>
        {/* <!-- Body Content Area Inner Start --> */}

        <div className="body-content-area-inner">
          {/* PRODUCT AREA START */}
          <div className="ltn__product-area ltn__product-gutter">
            <div className="row">
              <div className="col-lg-4">
                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                  <form action="#" _lpchecked={1}>
                    <input
                      type="text"
                      name="search_text"
                      placeholder="Search ..."
                      value={search_text}
                      onChange={_handleChange}
                      className="search"
                      autoComplete="off"
                    />
                    <button type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>

                    <select
                      name="search_option"
                      value={search_option}
                      onChange={_handleChange}
                      className="select search-options"
                    >
                      <option value={""}>
                        Search By
                      </option>
                      {search_options.map((op) => (
                        <option key={op.value} value={op.value}>
                          {op.label}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                  <ul>
                    <li>
                      <div
                        className="short-by text-center cursor-pointer"
                        style={{ width: "32px" }}
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Refresh"
                        onClick={_handleGridRefresh}
                      >
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select
                          onChange={_download}
                          name="sort_name"
                          value={""}
                          className="nice-select"
                        >
                          <option disabled value={""}>
                            Export
                          </option>
                          <option value={1}>CSV</option>
                          <option value={2}>Excle</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select
                          onChange={_handleChange}
                          name="sort_name"
                          value={sort_name}
                          className="nice-select"
                        >
                          <option value={""}>
                            Sort By
                          </option>
                          {search_options.map((op) => (
                            <option key={op.value} value={op.value}>
                              {op.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select
                          onChange={_handleChange}
                          name="sort_type"
                          value={sort_type}
                          className="nice-select"
                        >
                          <option disabled value={""}>
                            Sort By
                          </option>
                          <option key={"asc"} value={"asc"}>
                            Ascending
                          </option>
                          {/* <option key={"desc"} value={"desc"}>
                              Descending
                            </option> */}
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <div className="short-by-menu">
                          <select
                            className="nice-select"
                            // onChange={changeValue}
                            // value={importAs}
                            name="importAs"
                          >
                            <option selected disabled value={""}>
                              Import
                            </option>
                            <option value="template">Template</option>
                            <option value="upload">Upload</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="btn-wrapper text-center mt-0 d-none">
                        <CSVExport
                          ref={csv_export}
                          data={{
                            header: _exportData()?.header,
                            csv_data: _exportData()?._data,
                          }}
                          file_name={_exportData()?.file_name || ""}
                        />
                        <ExportExcle
                          ref={excle_export}
                          data={_exportData()?._data}
                          file_name={_exportData()?.file_name || ""}
                        />

                        {/* <ExcleExport /> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* PRODUCT AREA END */}

          {isLoading ?
            <LoaderAnimation />
            :
            <>
              {/* SELECT AVAILABILITY AREA START */}
              <div className="select-availability-area pb-4">
                <div className="row">
                  <div className="col-lg-12">
                    <AgencyList loading={isLoading} allProviders={allProviders} />

                    {/* <!-- pagination --> */}
                    {allProviders.length > 0 && (
                      <Pagination
                        recordsCount={providers_count}
                        pageIndex={providers_page_index}
                        recordsPerPage={providers_per_page}
                        handler={_paginatedListHandler}
                        className="mt-3"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default Agencies;
