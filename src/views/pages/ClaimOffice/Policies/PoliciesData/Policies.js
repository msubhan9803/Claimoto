import React, { createRef, useEffect } from "react";
import PoliciesList from "components/ClaimOffice/Policies/PoliciesList/PoliciesList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPolicies,
  HandleFilterTable,
  HandleTableInputValue
} from "store/actions/policies";
import { GetProducType } from "store/actions/product";
import SortArray from "sort-array";
import Fuse from "fuse.js";
import PaginationFromUI from "components/Pagination/PaginationFromUI";
import { getAllowActions } from "functions";
import ADAnimation from "components/AccessDenied/ADAnimation";
import CSVExport from "components/Export/CSV";
import ExportExcle from "components/Export/Excle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Policies() {
  //Permissions Controlling
  const { permissions } = useSelector((state) => state.authReducer);
  let policy_actions = getAllowActions({ permissions, module_name: "APO" });

  const dispatch = useDispatch();
  const policies = useSelector((state) => state.policyReducer.allPolicies);
  const { isLoading } = useSelector((state) => state.productReducer.product);
  const { search_options, policyListTableFilterData, filteredPoliciesList } =
    useSelector((state) => state.policyReducer);
  const {
    search_text,
    search_option,
    sort_name,
    sort_type,
    download,
    importAs,
    policies_per_page,
    policies_page_index,
    policies_count,
  } = policyListTableFilterData;

  useEffect(() => {
    dispatch(GetPolicies());
    dispatch(GetProducType());
  }, []);

  //Refs
  let excle_export = createRef();
  let csv_export = createRef();

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
      header: Object.keys(policies),
      _data: policies,
      file_name: `policies`,
    };
  };

  // Search Filter
  useEffect(() => {
    if (search_text && search_option) {
      const options = {
        // includeScore: true,
        // Search in `author` and in `tags` array
        keys: [search_option],
      };

      const fuse = new Fuse(policies, options);
      let result = fuse.search(search_text);

      let tempList = [];
      for (let i = 0; i < result.length; i++) {
        let item = result[i].item;
        tempList.push(item);
      }

      dispatch(HandleFilterTable(tempList.length > 0 ? tempList : policies));
      dispatch({
        type: "POLICIES_LIST_TABLE_DATA_CHANGE",
        payload: {
          name: "policies_count",
          value: tempList.length > 0 ? tempList.length : policies.length,
        },
      });
    } else {
      dispatch(HandleFilterTable(policies));
      dispatch({
        type: "POLICIES_LIST_TABLE_DATA_CHANGE",
        payload: { name: "policies_count", value: policies.length },
      });
    }
  }, [search_text, search_option]);

  // Sort Filter
  useEffect(() => {
    if (sort_name && sort_type) {
      let tempList = SortArray(policies, {
        by: sort_name,
        order: sort_type,
      });

      dispatch(HandleFilterTable(tempList.length > 0 ? tempList : policies));
      dispatch({
        type: "POLICIES_LIST_TABLE_DATA_CHANGE",
        payload: {
          name: "policies_count",
          value: tempList.length > 0 ? tempList.length : policies.length,
        },
      });
    }
  }, [sort_name, sort_type]);

  const _handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(HandleTableInputValue({ name, value }));
  };

  const _getPaginatedResults = (records) => {
    let start = policies_page_index * policies_per_page;
    let end = (policies_page_index + 1) * policies_per_page;
    let paginatedResult = records.slice(start, end);

    return paginatedResult;
  };

  // sort product
  const changeValue = (e) => {
    const { name, value } = e.target;
    dispatch(HandleTableInputValue(name, value));
  };

  const _paginatedListHandler = (pageIndex) => {
    dispatch(
      HandleTableInputValue({ name: "policies_page_index", value: pageIndex })
    );
  };

  return (
    <React.Fragment>
      {/* {isLoading ?
        <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        : */}
      <div className="body-wrapper">
        <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div className="ltnd__header-middle-area mt-30">
            <div className="row">
              <div className="col-lg-9">
                <div className="ltnd__page-title-area">
                  <h2>Policies ({policies.length})</h2>
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
                      placeholder="Search product..."
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
              <div className="col-lg-8">
                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                  <ul>
                    <li>
                      <div className="short-by text-center">
                        <select
                          onChange={_download}
                          name="sort_name"
                          value={""}
                          className="nice-select"
                        >
                          <option disabled value={""}>
                            download
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
                            Sort By
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
                    {policy_actions?.includes("INSERT") && (
                      <li>
                        <div className="btn-wrapper text-center mt-0">
                          <Link
                            to="/admin/create_policy"
                            className="btn theme-btn-1 btn-round-12"
                          >
                            Add +
                          </Link>
                          {/* <button type="submit" className="btn theme-btn-1 btn-round">Add +</button> */}
                        </div>
                      </li>
                    )}
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

          {/* SELECT AVAILABILITY AREA START */}
          <div className="select-availability-area pb-4">
            <div className="row">
              <div className="col-lg-12">
                {/* ltnd__policies-table start */}
                {/* {policy_actions?.includes("VIEW") ? ( */}
                  <PoliciesList
                    policies={_getPaginatedResults(filteredPoliciesList)}
                  />
                {/* ) : (
                  <ADAnimation />
                )} */}

                {/* <!-- pagination --> */}
                {policies_count > 0 && (
                  <PaginationFromUI
                    recordsCount={policies_count}
                    pageIndex={policies_page_index}
                    recordsPerPage={policies_per_page}
                    handler={_paginatedListHandler}
                    className="mt-3"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* } */}
    </React.Fragment>
  );
}

export default Policies;
