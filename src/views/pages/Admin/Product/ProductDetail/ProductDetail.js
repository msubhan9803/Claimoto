import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate , useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    RegisterProduct,
    GetInputs,
    RegisterBenft,
    GetProducType,
    GetSingleProduct,
    DeleteProduct,
    UpdateProduct,
    EditProductBenifit,
    UpdateProductBenifit,
    DeleteProductBenifit,
    CencelProductBenifit,
} from 'store/actions/product'
import Modal from 'react-modal';
import { currencyMap } from 'functions'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ProductDetail() {

    //  Get id from Url  
    let params = useParams();



    // states 
    const [benifit, setBenifit] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [field, setField] = useState(false);
    const [editbenifit, setEditBenifit] = useState('')
    const [addBenfit, setAddBenfit] = useState('')
    const [delBenifit, setDelBenifit] = useState('')

    // Get ProductTypes from Server
const location = useLocation();
    useEffect(() => {
        if (params.id) {
            dispatch(GetSingleProduct(params.id))
        }
        dispatch(GetProducType())
    }, [])

   


    // dispatch hook 

    const dispatch = useDispatch()

    // selector state from redux 

    const product = useSelector(state => state.productReducer.product)
    const productTyps = useSelector(state => state.productReducer.product_Types)
    const {isSuccess} = useSelector(state => state.productReducer)
    console.log(isSuccess);
    // destructre  input value from reducer 

    const {
        Id,
        TenantId,
        ProductName,
        ProductType,
        ProductDetails,
        AnnualPremium,
        Status,
        CoPayPercentage,
        Deductibles,
        IsAgencyRepair,
        Benefit,
        BenefitDetails,
    } = product


// useEffect(() => {
// if (isSuccess) {
//     navigate('/admin/products')
    
// }
// }, [isSuccess])


    // Change value 

    const changeValue = (e) => {
        e.persist();
        if (e.target.name === "Status") {
            let value = e.target.checked;
            let name = e.target.name;
            dispatch(GetInputs(name, value))
        }

        else {
            const { name, value } = e.target;
            dispatch(GetInputs(name, value))
        }

    }

    // save benefit in redux array

    const SaveBenift = () => {
        if(BenefitDetails !== "" ){
            dispatch(RegisterBenft(addBenfit))
            setTimeout(() => {
                setAddBenfit("")
            }, 500)
            setBenifit(false)
            setField(false)

        }
        else{
            setField(true )
        }


    }

    // cancel benefit 

    const CancelBenift = () => {
        dispatch(CencelProductBenifit())
        setEditBenifit(null)


    }



    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    // Send Form data 


    const SendForm = (e) => {
            dispatch(RegisterProduct(product))
        
    }

    


    // Edit Benefit

    const EditBnft = (id) => {
        setEditBenifit(id)
        dispatch(EditProductBenifit(id))

    }

    // Update Banefit

    const UpdateBenift = (id) => {
        setEditBenifit(null)
        dispatch(UpdateProductBenifit(id))
    }

    // Delete banefits

    const DelBenifit = () => {
        dispatch(DeleteProductBenifit(delBenifit))
        closeModal()
        setDelBenifit("")
    }



    // delete Product

    const delProduct = () => {
        dispatch(DeleteProduct(params.id))
        closeModal()

    }

    // update Product 

    const updateProduct = (e) => {
        dispatch(UpdateProduct(product))
    }



    
    
    
    // validetion useform
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    
    console.log("error" , errors)

    function onSubmit() {
      return params.id
          ? updateProduct()
          : SendForm();
  }
    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area ">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/admin/products">
                                        <i className="icon-left-arrow-1" /> Back
                                    </Link>
                                </p>
                                <h2>{params.id ? ProductName : "Create Product"}</h2>
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

            {/* Body Content Area Inner Start */}
            <form className="ltnd__form-1" onSubmit={handleSubmit(onSubmit) } onReset={reset}>
                <div className="body-content-area-inner">
                    {/* BLOCK AREA START ( Product Details section - 1 ) */}
                    <div className="ltnd__block-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__block-item mt-30">
                                    <div className="ltnd__title ltnd__title-2">
                                        <h4>Product information</h4>
                                    </div>
                                    <div className="ltn__block-item-info">
                                        {/* form */}
                                        {/* <form className="ltnd__form-1"> */}
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Product name</h6>
                                                    <input
                                                        type="text"
                                                        name="ProductName"
                                                        value={ProductName}
                                                        {...register('ProductName' , { required : "Product Name is required" })}
                                                        onChange={changeValue}
                                                        placeholder="Product Name"
                                                    />

                                                    {/* <div className="error_show"> {errors.ProductName?.message } </div> */}
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Product type</h6>
                                                    <select className="nice-select"
                                                        value={ProductType}
                                                        name="ProductType"
                                                        {...register('ProductType', { required : "Product Type is required " })}
                                                        onChange={changeValue}
                                                    >
                                                        {productTyps.map((i) => (
                                                            <option value={i.Id} key={i.Id}>{i.ProductTypeName}</option>
                                                        ))}
                                                    </select>

                                                    {/* <div className="error_show"> {errors.ProductName.message && <p>{errors.ProductName.message}</p>} </div> */}

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Annual premium</h6>
                                                    <input type="text"
                                                        name="AnnualPremium"
                                                        value={AnnualPremium}
                                                        {...register('AnnualPremium' , { required : "Annual Premium is required" ,  min: 4, max: 99 })}

                                                        onChange={changeValue} placeholder="0.000 KDW" />
                                                    {/* <div className="error_show"> {errors.AnnualPremium?.message } </div> */}
                                                   

                                                </div>
                                            </div>
                                        </div>
                                        {/* </form> */}
                                        {/* excerpt */}
                                        <div className="ltnd__product-details-excerpt">
                                            <h6 className="ltnd__title-3"> Product information</h6>

                                            <div className="benifits-brief" style={{ width: '100%' }}>
                                                <input type="text"
                                                    style={{ borderBottom: 'none' }}
                                                    className='form-control'
                                                    {...register('ProductDetails' , { required : true })}
                                                    onChange={changeValue}
                                                    value={ProductDetails}
                                                    placeholder='Type Here....'
                                                    name="ProductDetails" />
                                                {/* <div className="error_show"> { errors.ProductDetails?.message } </div> */}

                                            </div>


                                        </div>
                                        <hr />
                                        {/* status */}
                                        <div className="ltnd__product-status mt-30">
                                            <h6 className="ltnd__title-3 ">Status</h6>
                                            <div className="ltn__checkbox-radio-group inline" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox"
                                                        name="Status"
                                                        // {...register('Status', { required: true })}
                                                        checked={Status}
                                                        onChange={changeValue} />

                                                    <i className="lever" /> <span className="text">{Status === true ? "active" : "Inactive"}</span>
                                                </label>
                                                <div className="error_show"> {errors.Status && "Status is required"} </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLOCK AREA END */}
                    {/* BLOCK AREA START ( Product Details section - 2 ) */}
                    <div className="ltnd__block-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__block-item mt-30">
                                    <div className="ltnd__title ltnd__title-2">
                                        <h4>Coverage</h4>
                                    </div>
                                    <div className="ltn__block-item-info">
                                        {/* form */}
                                        {/* <form className="ltnd__form-1"> */}
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Copay</h6>
                                                    <input
                                                        type="number"
                                                        name="CoPayPercentage"
                                                        value={CoPayPercentage}
                                                        {...register('CoPayPercentage', { required : true })}

                                                        onChange={changeValue}
                                                        placeholder="Amount"
                                                    />
                                                    {/* <div className="error_show"> { errors.CoPayPercentage} </div> */}

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Deductibles</h6>
                                                    <input type="number"
                                                        value={Deductibles}
                                                        {...register('Deductibles' , { required : true })}

                                                        onChange={changeValue}
                                                        name="Deductibles" placeholder="Amount" />
                                                    {/* <div className="error_show"> {errors.Deductibles?.message} </div> */}

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Gragage/ Agency repair</h6>
                                                    <select className="nice-select"
                                                        value={IsAgencyRepair}
                                                        name="IsAgencyRepair"
                                                        {...register('IsAgencyRepair' ,{ required : true })}
                                                        onChange={changeValue}>
                                                        <option defaultValue={1} >Repair By Agency </option>
                                                        <option value={2}>Repair By Garage </option>
                                                        <option value={3}>Repair By Agency/Garage </option>
                                                    </select>
                                                    {/* <div className="error_show"> {errors.IsAgencyRepair?.message} </div> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* </form> */}
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLOCK AREA END */}
                    {/* BLOCK AREA START ( Benefits ) */}
                    <div className="ltnd__block-area pb-60">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="benifits-header mt-30">
                                    <h4>Benefits ({Benefit?.length})</h4>
                                    <div className="btn-normal">
                                        <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setBenifit(true)} className="ltn__secondary-color">
                                            Add benefit +
                                        </span>
                                    </div>
                                </div>
                                <div className="benifits-list">

                                    {/* benifits-list-item */}
                                    {Benefit ? Benefit.map((item, index) => {
                                        if(item != null)
                                        return (

                                            <div className="benifits-list-item" key={index}>
                                                {editbenifit === index ?

                                                    <>
                                                        <div className="benifits-brief" style={{ width: '70%' }}>
                                                            <input type="text" className='form-control' onChange={changeValue} value={BenefitDetails} placeholder='Type Here....' name="BenefitDetails" />
                                                        </div>
                                                    </>
                                                    :
                                                    <div className="benifits-brief">
                                                        <i className="fas fa-circle" />
                                                        <span>
                                                            {item?.BenefitDetails}
                                                        </span>
                                                    </div>
                                                }
                                                <div className="benifits-btn btn-normal" style={editbenifit === index ? { marginTop: '20px' } : null}>
                                                    <span className="ltn__color-1 cancel_btn">
                                                        {editbenifit === index ? <div onClick={() => CancelBenift()}>Cancel</div> : <div onClick={() => { return setDelBenifit(index), openModal() }}>Delete</div>}
                                                    </span>
                                                    <span className="ltn__secondary-color add_btn">
                                                        {editbenifit === index ? <div onClick={() => UpdateBenift(index)}>Save</div> : <div onClick={() => EditBnft(index)}>Edit</div>}

                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )

                                        : null
                                    }
                                    {benifit &&
                                        (
                                            <div div className="benifits-list-item">
                                                <div className="benifits-brief" style={{ width: '70%' }}>
                                                    <input type="text" value={BenefitDetails} className='form-control' onChange={changeValue} name="BenefitDetails" placeholder='Enter benifits here...' />
                                                    {/* { field && <div className='error_show'>Benefit Field is Required</div>} */}
                                                </div>
                                                <div className="benifits-btn btn-normal mt-3 ">
                                                    <span className="ltn__color-1 cancel_btn" onClick={() => setBenifit(false)}>
                                                        Cancel
                                                    </span>
                                                    <span onClick={() => SaveBenift()} className="ltn__secondary-color add_btn">
                                                        Add
                                                    </span>
                                                </div>
                                            </div>

                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLOCK AREA END */}



                </div>
                {/* Body Content Area Inner End */}
                <footer className="ltnd__footer-1 fixed-footer-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__footer-1-inner bg-white">

                                    <div className="ltnd__left btn-normal" >
                                        {params.id &&
                                            <span onClick={() => openModal()}
                                                style={{ fontWeight: '600', cursor: 'pointer' }}
                                            >
                                                <i className="ti-trash" /> Delete
                                            </span>
                                        }
                                    </div>

                                    <div className="ltnd__right btn-normal">
                                        <div className="btn-wrapper">
                                            <Link to="/products">
                                                <i className="ti-angle-left" /> Back
                                            </Link>
                                            <button   type="submit" className="btn theme-btn-1 btn-round-12">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Body Content Area End */}

            </form>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <i className="fa fa-close" style={{marginLeft:'20px'}}></i>
                            </div>
                            <h4 className="modal-title w-100">Are you sure?</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                                onClick={() => closeModal()}
                            >
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Do you really want to delete these records? This process cannot be
                                undone.
                            </p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" onClick={() => closeModal()} className="btn btn-secondary" data-dismiss="modal">
                                Cancel
                            </button>
                            <button onClick={delBenifit ? DelBenifit : delProduct} type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>


            </Modal>


        </React.Fragment >
    )
}

export default ProductDetail
