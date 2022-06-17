import React from 'react';
import moment from 'moment';

export default function AssignedToAgencyGarage({ state }) {
    console.log("state: ", state)

    const _getBranchName = (branchId) => {
        let branchName = state?.agencyDetails?.ProviderLocations.find(loc => loc.Id === branchId);
        return branchName?.BranchName;
    }

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
                            <h6 data-toggle="tooltip" data-placement="left" title={moment(state?.AgencyGarageAssign_Date).format("LL")}>
                                {moment(state?.AgencyGarageAssign_Date).fromNow()} &nbsp;
                                ({moment(state?.AgencyGarageAssign_Date).format("MMMM Do YYYY, h:mm a")})
                            </h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Agency/Garage name</h6>
                            <h6>{state?.agencyDetails?.Name}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Branch name</h6>
                            <h6>{_getBranchName(state?.AgencyGarageBranchId)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
