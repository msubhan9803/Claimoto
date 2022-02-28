import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  GetVehiclePartById,
  LoadVehiclePartsList,
} from "../../../../store/actions/vehicleParts";
import Pagination from "components/Pagination/Pagination";
import VehiclePartList from "../../../../components/Admin/VehiclePart/VehiclePartList";
import { setUserPage } from "store/actions/users/users_screen";

const VehicleParts = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let dispatch = useDispatch();
  const {
    vehiclePartList,
    parts_per_page,
    parts_page_index,
    parts_count,
    vehiclePartListTableData,
  } = useSelector((state) => state.vehiclePartsReducer);
  const { search_text, search_option, sort_name, sort_type } =
    vehiclePartListTableData;
  const _handleEdit = (id) => {
    searchParams.set("action", "edit_user");
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  const _paginationHandler = (pageIndex) => {
    dispatch(setUserPage(pageIndex));
  };

  // useEffect(() => {
  //   dispatch(
  //     LoadVehiclePartsList({
  //       parts_per_page,
  //       parts_page_index,
  //       search_text,
  //       search_option,
  //       sort_name,
  //       sort_type,
  //     })
  //   );
  // }, [parts_per_page, parts_page_index]);

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
        {/* <!-- PRODUCT AREA START --> */}
        <div class="ltn__product-area ltn__product-gutter">
          <div class="row">
            <div class="col-lg-5">
              <div class="ltn__search-widget ltnd__product-search-widget mb-30">
                <form action="#" _lpchecked="1">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search product..."
                    class=""
                  />
                  <button type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="ltn__shop-options ltnd__shop-options select-list-right">
                <ul>
                  <li>
                    <div class="short-by text-center">
                      <div class="short-by-title">
                        <p>Status</p>
                      </div>
                      <div class="short-by-menu">
                        <select class="nice-select">
                          <option>All</option>
                          <option>Sort by </option>
                          <option>Sort by new </option>
                          <option>Sort by price</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="short-by text-center">
                      <div class="short-by-title">
                        <p>Date Added</p>
                      </div>
                      <div class="short-by-menu">
                        <select class="nice-select">
                          <option>All</option>
                          <option>Sort by </option>
                          <option>Sort by new </option>
                          <option>Sort by price</option>
                        </select>
                      </div>
                    </div>
                  </li>
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
                  <li>
                    <div class="btn-wrapper text-center mt-0">
                      <Link
                        className="btn theme-btn-1 btn-round-12 mt-2"
                        to={"add_vehical_detail"}
                      >
                        Add +
                      </Link>
                      {/* <!-- <button type="submit" class="btn theme-btn-1 btn-round">Add +</button> --> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- PRODUCT AREA END -->          */}

        {/* <!-- SELECT AVAILABILITY AREA START --> */}
        <div class="select-availability-area pb-120">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div class="ltn__shop-details-tab-menu mb-20 d-none">
                  <div class="nav">
                    <a
                      class="active show"
                      data-bs-toggle="tab"
                      href="#ltn__tab_3_1"
                    >
                      Garages
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">
                      Agencies
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__tab_3_3" class="">
                      Car agencies
                    </a>
                  </div>
                </div>
                <div class="tab-content">
                  {/* <!-- ltnd__garage-table-wrap  --> */}
                  <div class="tab-pane fade active show" id="ltn__tab_3_1">
                    <div class="ltn__apartments-tab-content-inner">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                            <div class="ltn__select-availability-table  d-none d-md-block">
                              <ul class="ltn__select-availability-table-head">
                                <li class="table-data-1">Part name</li>
                                <li class="table-data-2 ltn__color-1">ID</li>
                                <li class="table-data-2">Make</li>
                                <li class="table-data-2">Model</li>
                                <li class="table-data-2">Brand</li>
                                <li class="table-data-2">Year</li>
                                <li class="table-data-4">OEM number </li>
                                <li class="table-data-4">Artificial number</li>
                                <li class="table-data-8">Details</li>
                              </ul>

                              {/* Vehicle List */}
                              <VehiclePartList state={vehiclePartList} />
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
