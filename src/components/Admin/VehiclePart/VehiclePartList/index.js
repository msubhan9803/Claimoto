import React from "react";
import { Link } from "react-router-dom";

const Index = ({ state }) => {
  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item, key) => (
            <ul class="ltn__select-availability-table-row">
              <li class="table-data-1">
                <strong>{item.partName}</strong>
              </li>
              <li class="table-data-2 ltn__color-1">{item._id}</li>
              <li class="table-data-2">{item.make}</li>
              <li class="table-data-2">{item.model}</li>
              <li class="table-data-2">{item.brand}</li>
              <li class="table-data-2">{item.year}</li>
              <li class="table-data-4">{item.oemNumber}</li>
              <li class="table-data-4">{item.artificialNumber}</li>
              <li class="table-data-8 ltn__secondary-color-2">
                <Link to={"vehical_detail/" + item._id}>
                  <strong>Details</strong>
                </Link>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <ul>
          <li class="table-data-2 d-flex flex-row justify-content-center">
            <i class="fa fa-2x fa-th" aria-hidden="true"></i> &nbsp; No Data
          </li>
        </ul>
      )}
    </>
  );
};

export default Index;
