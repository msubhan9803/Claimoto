// import SearchBar from 'components/Admin/SearchBar/SearchBar'
import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GetProduct,
  SortProducts,
  ProductStatus,
  GetInputs,
  GetProducts,
  HandleTableInputValue,
  HandleFilterTable,
} from "store/actions/product";
import { useSelector, useDispatch } from "react-redux";
import { _productDetailDotDot } from "functions";
import moment from "moment";
import { GetProducType } from "store/actions/product";
import SortArray from "sort-array";
import PaginationFromUI from "components/Pagination/PaginationFromUI";
import Fuse from "fuse.js";
import { setProductPage } from "store/actions/product";
import { getAllowActions } from "functions";
import ADAnimation from "components/AccessDenied/ADAnimation";
import CSVExport from "components/Export/CSV";
import ExportExcle from "components/Export/Excle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Products() {
  //Permission Control
  const { permissions } = useSelector(state => state.authReducer);
  let product_actions = getAllowActions({ permissions, module_name: "APR" });


  //Refs
  let excel_export = createRef();
  let csv_export = createRef();


  // State
  const [search, setSearch] = useState("");

  // selector hook
  const allProductsList = useSelector(
    (state) => state.productReducer.allProducts
  );
  const inputValue = useSelector((state) => state.productReducer.product);
  const productTyps = useSelector(
    (state) => state.productReducer.product_Types
  );
  const {
    search_text,
    search_option,
    sort_name,
    sort_type,
    search_options,
    filteredProducts,
    products_per_page,
    products_page_index,
    products_count,
  } = useSelector((state) => state.productReducer);

  // dipatch hook

  const dispatch = useDispatch();


  // disptach peoduct action
  useEffect(() => {
    dispatch(GetProduct());
    dispatch(GetProducType());
  }, []);

  useEffect(() => {
    _handleSortingFiltering();
  }, [allProductsList.length, search_text, search_option, inputValue.status, products_page_index]);




  const _download = (event) => {
    switch (parseInt(event.target.value)) {
      case 1:
        csv_export.current.link.click();
        break;
      case 2:
        excel_export.current.click();
        break;

      default:
        break;
    }
  }

  const _exportData = () => {
    return { header: Object.keys(allProductsList), _data: allProductsList, file_name: `products` };
  }


  const _handleSortingFiltering = () => {
    if (allProductsList.length > 0) {
      let searchedList = [];
      if (search_text && search_option) {
        const options = {
          keys: [search_option],
        };

        const fuse = new Fuse(allProductsList, options);
        let result = fuse.search(search_text);

        for (let i = 0; i < result.length; i++) {
          let item = result[i].item;
          searchedList.push(item);
        }
      } else {
        searchedList = allProductsList;
      }

      let activeTempList = searchedList;
      let furtherList = [];
      if (inputValue.status == "all") {
        furtherList = activeTempList;
      } else if (inputValue.status == "active") {
        for (let i = 0; i < activeTempList.length; i++) {
          let item = activeTempList[i];
          if (item.Status) {
            furtherList.push(item);
          }
        }
      } else {
        for (let i = 0; i < activeTempList.length; i++) {
          let item = activeTempList[i];
          if (!item.Status) {
            furtherList.push(item);
          }
        }
      }
      dispatch(HandleTableInputValue({ name: "products_count", value: furtherList.length }));

      dispatch(HandleFilterTable(furtherList));
    }
  };

  const _getPaginatedResults = (records) => {
    let start = products_page_index * products_per_page;
    let end = (products_page_index + 1) * products_per_page;
    let paginatedResult = records.slice(start, end);
    console.log("paginated redults: ", paginatedResult)

    return paginatedResult;
  }

  // sort product
  const changeValue = (e) => {
    if (e.target.name === "status") {
      const { name, value } = e.target;
      dispatch(GetInputs(name, value));
      //   dispatch(ProductStatus(value));
    } else {
      const { name, value } = e.target;
      dispatch(GetInputs(name, value));
      dispatch(SortProducts(value, allProductsList));
    }
  };

  const _handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(HandleTableInputValue({ name, value }));
  };

  const _getProductNameFromProductTypes = (productId) => {
    if (productTyps.length > 0) {
      return productTyps.find((product) => product.Id == productId)
        .ProductTypeName;
    } else {
      return "";
    }
  };

  const _paginatedListHandler = (pageIndex) => {
    dispatch(HandleTableInputValue({ name: "products_page_index", value: pageIndex }));
  };

  return (
    <React.Fragment>
      <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        {/* header-middle-area start */}
        <div className="ltnd__header-middle-area mt-30">
          <div className="row">
            <div className="col-lg-9">
              <div className="ltnd__page-title-area">
                <h2>Products ({filteredProducts.length})</h2>
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
      {/* <!-- Body main wrapper start --> */}
      <div className="body-wrapper">
        <div className="body-content-area-inner">
          {/* PRODUCT AREA START */}
          <div className="ltn__product-area ltn__product-gutter mb-120">
            <div className="row">
              <div className="col-lg-4">
                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                  <form _lpchecked={1}>
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
                        <select onChange={_download} name="sort_name" value={""} className="nice-select">
                          <option disabled value={""}>Export</option>
                          <option value={1} >
                            CSV
                          </option>
                          <option value={2} >
                            Excle
                          </option>

                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <div className="short-by-menu">
                          <select
                            className="nice-select"
                            onChange={changeValue}
                            value={inputValue.status}
                            name="status"
                          >
                            <option selected value="all">
                              All
                            </option>
                            <option value="active">Active </option>
                            <option value="inActive">Inactive </option>
                          </select>
                        </div>
                      </div>
                    </li>
                    {/* <li>
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
                    </li> */}

                    {product_actions?.includes("INSERT") &&
                      <li>
                        <div className="btn-wrapper text-center mt-0">
                          <Link
                            to="/admin/create_product"
                            className="btn theme-btn-1 btn-round-12"
                          >
                            Add +
                          </Link>
                        </div>
                      </li>
                    }

                    <li>
                      <div className="btn-wrapper text-center mt-0 d-none">
                        <CSVExport ref={csv_export} data={{ header: _exportData()?.header, csv_data: _exportData()?._data }} file_name={_exportData()?.file_name || ""} />
                        <ExportExcle ref={excel_export} data={_exportData()?._data} file_name={_exportData()?.file_name || ""} />

                        {/* <ExcleExport /> */}
                      </div>
                    </li>


                  </ul>
                </div>
              </div>
            </div>
            {product_actions?.includes("VIEW") ?
              <div className="row">
                {/* product-item */}
                {filteredProducts.length > 0
                  ? _getPaginatedResults(filteredProducts).map((item, index) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={item.id}>
                        <div className="ltnd__product-item row flex-column justify-content-between mx-1">
                          <div>
                            <h6 className="ltnd__product-title">
                              <Link to={`/admin/product_detail/${item.id}`}>
                                {_productDetailDotDot(item.ProductName, 30)}
                              </Link>
                            </h6>
                            <div className="d-flex flex-row justify-content-between">
                              <span>
                                {/* {moment(item.CreatedDate).format(
                                "MMMM Do YYYY, h:mm"
                              )} */}
                                {_getProductNameFromProductTypes(
                                  item.ProductType
                                )}
                              </span>
                              <span>
                                {Number(item.AnnualPremium).toFixed(3)} KWD
                              </span>
                            </div>
                            <div className="ltnd__product-brief">
                              <p>
                                {_productDetailDotDot(item.ProductDetails, 120)}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div
                              className="ltnd__product-btn"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  textAlign: "left",
                                }}
                              >
                                <strong>Last Modify</strong>
                                <small style={{ fontSize: "10px" }}>
                                  {moment(item.UpdatedDate).format(
                                    "MMMM Do YYYY, h:mm"
                                  )}
                                </small>
                              </div>

                              <div style={{ marginTop: "auto" }}>
                                <Link to={`/admin/product_detail/${item.id}`}>
                                  <strong>View details</strong>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  : null}
              </div>
              :
              <ADAnimation />
            }
            {filteredProducts && !filteredProducts.length && (
              <div className="row text-center h-100">
                <h5>
                  <i class="fa fa-th" aria-hidden="true"></i> &nbsp; No Data
                  Found
                </h5>
              </div>
            )}

            {/* <!-- pagination --> */}
            {products_count > 0 && (
              <PaginationFromUI
                recordsCount={products_count}
                pageIndex={products_page_index}
                recordsPerPage={products_per_page}
                handler={_paginatedListHandler}
                className="mt-3"
              />
            )}
            {/* <!--  --> */}
          </div>
          {/* PRODUCT AREA END */}
        </div>
        {/* Body Content Area Inner End */}
      </div>
      {/* <!-- Body main wrapper end --> */}
    </React.Fragment>
  );
}

export default Products;