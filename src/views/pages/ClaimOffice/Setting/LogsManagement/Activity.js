import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAllActivityLogs,
  HandleAccountValuesOuter,
  SetPageIndex
} from "../../../../../store/actions/settings/index.js";
import ActivityLogsList from "../../../../../components/ClaimOffice/Activities/ActivityLogsList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Pagination from "components/Pagination/Pagination";

const Activity = ({ layout }) => {
  let dispatch = useDispatch();
  const {
    activitesList,
    search_option,
    search_text,
    sort_type,
    sort_name,
    search_options,
    logs_per_page,
    logs_page_index,
    // logs_count,
    to_date,
    from_date,
    activity_type,
  } = useSelector((state) => state.settingsReducer);
  const { ActivityLogs, TotalRecords } = activitesList;

  useEffect(() => {
    dispatch(GetAllActivityLogs());
  }, []);

  useEffect(() => {
    if (
      (search_text?.length > 2 && search_option !== "") ||
      search_text === ""
    ) {
      dispatch(
        GetAllActivityLogs(
          logs_page_index,
          logs_per_page,
          search_text,
          search_option,
          sort_type,
          sort_name,
          to_date,
          from_date,
          activity_type
        )
      );
    }
  }, [search_text, search_option, sort_name, sort_type, logs_page_index]);

  const _handleChange = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    dispatch(HandleAccountValuesOuter(name, value));
  };

  const _paginationHandler = (pageIndex) => {
    dispatch(SetPageIndex(pageIndex));
  };

  return (
    <div class="body-bg-1 pb-80">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Activity</h2>
                <p class="page-back-btn">
                  <Link to={`/${layout}/settings`}>
                    <i className="icon-left-arrow-1" /> Back
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-3 align-self-center text-end">
              <div class="btn-wrapper btn-inline text-center mt-0 d-none">
                <a
                  href="#"
                  class="btn theme-btn-1 btn-round-12 btn-2"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#adding_modal"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body-content-area-inner pt-20">
        <div className="ltn__product-area ltn__product-gutter">
          <div className="row">
            <div className="col-lg-5">
              <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                <form action="#" _lpchecked={1}>
                  <input
                    type="text"
                    name="search_text"
                    placeholder="Search ..."
                    onChange={_handleChange}
                    className=""
                    value={search_text}
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
                    <option disabled value={""}>
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
            <div className="col-lg-7">
              <div className="ltn__shop-options ltnd__shop-options select-list-right">
                <ul>
                  <li>
                    <div className="short-by text-center">
                      <select
                        onChange={_handleChange}
                        name="sort_name"
                        value={sort_name}
                        className="nice-select"
                      >
                        <option disabled value={""}>
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
                          Order By
                        </option>
                        <option key={"asc"} value={"asc"}>
                          Ascending
                        </option>
                        <option key={"desc"} value={"desc"}>
                          Descending
                        </option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <div className="short-by-menu">
                        <select
                          className="nice-select"
                          // onChange={changeValue}
                          // value={download}
                          name="download"
                        >
                          <option selected disabled value={""}>
                            Download
                          </option>
                          <option value="csv">CSV</option>
                          <option value="pdf">PDF</option>
                        </select>
                      </div>
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="select-availability-area pb-120">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div class="ltn__shop-details-tab-menu mb-20">
                  <div class="nav">
                    <a
                      class="active show"
                      data-bs-toggle="tab"
                      href="#ltn__tab_3_1"
                    >
                      Activity Log
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">
                      Error Log
                    </a>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade active show" id="ltn__tab_3_1">
                    <div class="ltn__apartments-tab-content-inner">
                      <ActivityLogsList activitesList={ActivityLogs} layout={layout} />
                    </div>
                  </div>
                </div>

                <Pagination
                  recordsCount={TotalRecords}
                  pageIndex={logs_page_index}
                  recordsPerPage={logs_per_page}
                  handler={_paginationHandler}
                  className="mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
