import instance from "config/axios/instance";
import { SweetAlert, successWithoutConfirmAlert } from "functions";
import {
  REGISTER_PRODUCT,
  REGISTER_BENEFIT,
  GET_PRODUCTS,
  GET_PRODUCT_TYPE,
  GET_SINGLE_PRODUCT,
  GET_PRODUCT_INPUTS,
  EDIT_PRODUCT_BENEFIT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_BENEFIT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_BENEFIT,
  CHECK_PRODUCT_ACTIVE,
  PRODUCT_SORT,
  FILTERS_DATA_CHANGE,
  HANDLE_PRODUCT_FILTERING,
  SET_PRODUCTS_PAGE_INDEX,
} from "store/types/types";

export const GetInputs = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_INPUTS,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// CheckProductType

export const SortProducts = (value, products) => (dispatch) => {
  const product = products.slice();
  if (value === "ProductName") {
    product.sort((a, b) => (a > b ? 1 : -1));
  } else {
    product.sort((a, b) => (a < b ? 1 : -1));
  }
  dispatch({
    type: PRODUCT_SORT,
    payload: product,
  });
};

export const ProductStatus = (value) => (dispatch) => {
  try {
    if (value === "active") {
      dispatch({
        type: CHECK_PRODUCT_ACTIVE,
        payload: true,
      });
    } else {
      dispatch({
        type: CHECK_PRODUCT_ACTIVE,
        payload: false,
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};

export const CheckProductName = (value) => (dispatch) => {
  try {
    dispatch({
      type: "CHECK_PRODUCT_NAME",
      payload: value,
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Register Products

export const RegisterProduct = (data) => async (dispatch) => {
  try {
    const {
      ProductDetails,
      CoPayPercentage,
      ProductName,
      ProductType,
      Status,
      AnnualPremium,
      Deductibles,
      IsAgencyRepair,
      Benefit,
    } = data;
    debugger;
    let check = Array.isArray(Benefit) && Benefit.length;
    let annual = Number(AnnualPremium);
    let copay = CoPayPercentage;
    let deduc = Deductibles;
    let agency = Number(IsAgencyRepair);

    let value = {
      ProductName,
      ProductType,
      ProductDetails,
      Status,
      AnnualPremium: annual,
      TenantId: 2,
      Coverage: {
        CoPayPercentage: copay,
        Deductibles: deduc,
        IsAgencyRepair: agency,
      },
      Benefit: check === 1 ? Benefit : null,
    };
    console.log("value", value);
    let res = await instance.post("api/product", value);

    if (res.data?.includes("Already")) {
      SweetAlert({
        text: res.data,
        icon: "warning",
      });
      dispatch({ type: "ALERT_ALREADY_EXIT", payload: res.data });
    } else {
      dispatch({
        type: REGISTER_PRODUCT,
        payload: data,
      });
      successWithoutConfirmAlert({
        text: res.data,
        icon: "success",
      });
      setTimeout(() => {
        window.location.href = "/admin/products";
      }, 850);
    }
  } catch (err) {
    console.log("err", err);
  }
};

// Register Benifits

export const RegisterBenft = (data) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_BENEFIT,
      payload: data,
    });
  } catch (err) {}
};

// Get Product Type

export const GetProducType = () => async (dispatch) => {
  try {
    let res = await instance.get("api/producttype");
    dispatch({
      type: GET_PRODUCT_TYPE,
      payload: res.data,
    });
  } catch (err) {}
};

// Get Products
export const GetProduct = () => async (dispatch) => {
  try {
    let res = await instance.get("api/product");
    dispatch({ type: GET_PRODUCTS, payload: res.data });
    dispatch({
      type: HANDLE_PRODUCT_FILTERING,
      payload: res.data,
    });
    dispatch({
      type: FILTERS_DATA_CHANGE,
      payload: { name: "products_count", value: res.data.length },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Get Single Products
export const GetSingleProduct = (ID) => async (dispatch) => {
  try {
    let res = await instance.get(`api/Product/${ID}`);
    dispatch({ type: GET_SINGLE_PRODUCT, payload: res.data });
  } catch (err) {
    SweetAlert({ text: err.response.data.Message, icon: "warning" });
  }
};

// Edit Product Benifit

export const EditProductBenifit = (id) => (dispatch) => {
  try {
    dispatch({
      type: EDIT_PRODUCT_BENEFIT,
      payload: id,
    });
  } catch (err) {}
};

// Cancel Product Benifit

export const CencelProductBenifit = () => (dispatch) => {
  try {
    dispatch({
      type: EDIT_PRODUCT_BENEFIT,
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Delete Product
export const DeleteProduct = (ID) => async (dispatch) => {
  try {
    let res = await instance.delete(`api/product/${ID}`);
    if (res.data?.includes("activate")) { 
      SweetAlert({
        text: res.data,
        icon: "error",
      });
    } else {
      SweetAlert({
        text: res.data,
        icon: "success",
      });
      dispatch({ type: DELETE_PRODUCT, payload: ID });
    }

  } catch (err) {
    console.log("err", err);
  }
};

// Delete Product Type
export const DeleteProductBenifit = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_BENEFIT, payload: id });
  } catch (err) {
    console.log("err", err);
  }
};

// Update Product
export const UpdateProduct = (data) => async (dispatch) => {
  const {
    Id,
    ProductDetails,
    CoPayPercentage,
    ProductName,
    ProductType,
    Status,
    TenantId,
    AnnualPremium,
    Deductibles,
    IsAgencyRepair,
    Benefit,
  } = data;
  try {
    let BenefitId = Benefit.map((obj) => ({ ...obj, ProductId: Id }));
    let Copy = Number(CoPayPercentage);
    let agency = Number(IsAgencyRepair);
    let value = {
      Id,
      ProductName,
      ProductType,
      ProductDetails,
      Status,
      TenantId,
      AnnualPremium,
      // UpdatedDate : Date.now(),
      Coverage: {
        ProductId: Id,
        CoPayPercentage: Copy,
        Deductibles,
        IsAgencyRepair: agency,
      },
      Benefit: BenefitId,
    };

    await instance.put("api/Product/PutProduct", value).then(res => {
      if (res.data?.includes("already")) {
        SweetAlert({
          text: "Product Name and Product type pair is not unique",
          icon: "error",
        });
        // dispatch({ type: "ALERT_ALREADY_EXIT", payload: res.data });
      } else {
        SweetAlert({
          text: res.data,
          icon: "success",
        });
        dispatch({ type: UPDATE_PRODUCT, payload: value });
      }
    })
  } catch (err) {
    console.log("err", err);
  }
};

// Update Product Type
export const UpdateProductBenifit = (id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_BENEFIT, payload: id });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleTableInputValue =
  ({ name, value }) =>
  (dispatch) => {
    try {
      dispatch({
        type: FILTERS_DATA_CHANGE,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };

export const HandleFilterTable = (filteredList) => (dispatch) => {
  try {
    dispatch({
      type: HANDLE_PRODUCT_FILTERING,
      payload: filteredList,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const setProductPage = (pageIndex) => async (dispatch) => {
  dispatch({ type: SET_PRODUCTS_PAGE_INDEX, payload: pageIndex });
};
