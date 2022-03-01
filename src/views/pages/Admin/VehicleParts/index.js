import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  GetVehiclePartById,
  LoadVehiclePartsList,
  HandleTableInputValue,
  HandleFilterTable,
} from "../../../../store/actions/vehicleParts";
import Pagination from "components/Pagination/Pagination";
import VehiclePartList from "../../../../components/Admin/VehiclePart/VehiclePartList";
import { setUserPage } from "store/actions/users/users_screen";
import Fuse from "fuse.js";
import SortArray from "sort-array";

const VehicleParts = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let dispatch = useDispatch();
  const {
    search_options,
    vehiclePartList,
    parts_per_page,
    parts_page_index,
    parts_count,
    vehiclePartListTableFilterData,
    filteredVehiclePartList,
  } = useSelector((state) => state.vehiclePartsReducer);
  const { search_text, search_option, sort_name, sort_type } =
    vehiclePartListTableFilterData;

  // Search Filter
  useEffect(() => {
    if (search_text && search_option) {
      const options = {
        // includeScore: true,
        // Search in `author` and in `tags` array
        keys: [search_option],
      };

      const fuse = new Fuse(vehiclePartList, options);
      let result = fuse.search(search_text);

      let tempList = [];
      for (let i = 0; i < result.length; i++) {
        let item = result[i].item;
        tempList.push(item);
      }

      dispatch(
        HandleFilterTable(tempList.length > 0 ? tempList : vehiclePartList)
      );
    } else {
      dispatch(HandleFilterTable(vehiclePartList));
    }
  }, [search_text, search_option]);

  // Sort Filter
  useEffect(() => {
    if (sort_name && sort_type) {
      let tempList = SortArray(vehiclePartList, {
        by: sort_name,
        order: sort_type,
      });

      dispatch(
        HandleFilterTable(tempList.length > 0 ? tempList : vehiclePartList)
      );
    }
  }, [sort_name, sort_type]);

  const _handleEdit = (id) => {
    setSearchParams(searchParams);
  };

  const _paginationHandler = (pageIndex) => {
    dispatch(setUserPage(pageIndex));
  };

  const _handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(HandleTableInputValue({ name, value }));
  };

  const getSortArrowBySortName = (sortName) => {
    if (sortName == sort_name) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2--- pt-0">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Vehicle parts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body-content-area-inner">
        {/* PRODUCT AREA START */}
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
                    autoComplete="off"
                  />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <select
                    name="search_option"
                    value={search_option}
                    onChange={_handleChange}
                    className="select search-options"
                  >
                    <option disabled value={""}>
                      Options
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
                          Sort
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
                    <div className="btn-wrapper text-center mt-0">
                      <Link
                        className="btn theme-btn-1 btn-round-12 mt-2"
                        to={"add_vehical_detail"}
                      >
                        Add +
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCT AREA END */}

        {/* <!-- SELECT AVAILABILITY AREA START --> */}
        <div class="select-availability-area pb-120">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div class="tab-content">
                  {/* <!-- ltnd__garage-table-wrap  --> */}
                  <div class="tab-pane fade active show" id="ltn__tab_3_1">
                    <div class="ltn__apartments-tab-content-inner">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                            <div class="ltn__select-availability-table  d-none d-md-block">
                              <ul class="ltn__select-availability-table-head">
                                <li class="table-data-1">
                                  Part name{" "}
                                  {getSortArrowBySortName("partName") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-2 ltn__color-1">
                                  ID
                                  {getSortArrowBySortName("id") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-2">
                                  Make
                                  {getSortArrowBySortName("make") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-2">
                                  Model
                                  {getSortArrowBySortName("model") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-2">
                                  Brand
                                  {getSortArrowBySortName("brand") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-2">
                                  Year
                                  {getSortArrowBySortName("year") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-4">
                                  OEM number
                                  {getSortArrowBySortName("oemNumber") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-4">
                                  Artificial number
                                  {getSortArrowBySortName(
                                    "artificialNumber"
                                  ) ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li class="table-data-8">
                                  Details
                                  {getSortArrowBySortName("description") ? (
                                    sort_type == "asc" ? (
                                      <i class="fa fa-solid ml-2 fa-arrow-up"></i>
                                    ) : (
                                      <i class="fa fa-solid ml-2 fa-arrow-down"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </li>
                              </ul>

                              {/* Vehicle List */}
                              <VehiclePartList
                                state={filteredVehiclePartList}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--  --> */}
                </div>

                {/* <!-- pagination --> */}
                <Pagination
                  recordsCount={parts_count}
                  pageIndex={parts_page_index}
                  recordsPerPage={parts_per_page}
                  handler={_paginationHandler}
                  className="mt-3"
                />
                {/* <!--  --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- SELECT AVAILABILITY AREA END -->   */}
      </div>
    </>
  );
};

export default VehicleParts;
