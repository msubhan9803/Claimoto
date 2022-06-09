import React from 'react';
import moment from 'moment';

export default function AssignedToAgencyGarage({ state }) {
    return (
        <div class="ltnd__block-item mt-30 mb-30">
            <div class="ltnd__space-between">
                <div class="ltnd__title ltnd__title-2">
                    <h4>Assigned to garage/agency</h4>
                </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Assigned date</h6>
                            <h6 data-toggle="tooltip" data-placement="left" title={moment(state?.AgencyGarageAssign_Date).format("LL")}>{moment(state?.AgencyGarageAssign_Date).fromNow()}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Agency/Garage name</h6>
                            <h6>{state?.AgencyGarageId}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Branch name</h6>
                            <h6>{state?.AgencyGarageBranchId}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
