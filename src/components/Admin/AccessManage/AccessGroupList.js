// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

// function AccessGroupList() {
//     let [searchParams, setSearchParams] = useSearchParams();
//     const { access_groups, roles } = useSelector(state => state.usersScreenReducer);
//     const _handleEdit = (id) => {
//         searchParams.set("action", "edit_access_group");
//         searchParams.set("id", id);
//         setSearchParams(searchParams);
//     }


//     return (
//         <React.Fragment>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
//                         <div className="ltn__select-availability-table  d-none d-md-block">
//                             <ul className="ltn__select-availability-table-head">
//                                 <li className="table-data-6">Name</li>
//                                 <li className="table-data-7 ltn__color-1">ID</li>
//                                 <li className="table-data-6">Role</li>
//                                 <li className="table-data-5">Status</li>
//                                 <li className="table-data-7">Edit </li>
//                             </ul>
//                             {access_groups.map((ag) => (
//                                 <ul className="ltn__select-availability-table-row">
//                                     <li className="table-data-6">
//                                         <strong>
//                                             {ag.name}
//                                         </strong>
//                                     </li>
//                                     <li className="table-data-7 ltn__color-1">{ag.id}</li>
//                                     <li className="table-data-12">
//                                         <div className="input-item ltnd__table-nice-select">
//                                             <select className="nice-select" value={ag.role}>
//                                                 {roles.map((role)=>(
//                                                     <option value={role.id}>{role.name}</option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                     </li>
//                                     <li className="table-data-5">
//                                         <div className="ltn__table-active-status clearfix">
//                                             <div className="ltn__checkbox-radio-group inline">
//                                                 <label className="ltn__switch-2">
//                                                     <input type="checkbox" checked={ag.status} />
//                                                     <i className="lever" />
//                                                     <span className="text"> Active</span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li className="table-data-7">
//                                         <strong>
//                                             <a onClick={()=>_handleEdit(ag.id)}  className="" title="Edit">
//                                                 Edit
//                                             </a>
//                                         </strong>
//                                     </li>
//                                 </ul>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>)
// }

// export default AccessGroupList;
