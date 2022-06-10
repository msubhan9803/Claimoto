import React from 'react'

export default function RemarksCard({ state, isApproved }) {
    return (
        <div class="ltnd__block-item mt-30 mb-30">
            <div class="ltnd__space-between">
                <div class="ltnd__title ltnd__title-2">
                    <h4>Remarks</h4>
                </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Status</h6>
                            <h6>{state?.StatusName}</h6>
                        </div>
                    </div>
                    {
                        !isApproved && (
                            <div class="col-lg-4 col-md-6">
                                <div class="policies-details-single-info">
                                    <h6 class="ltnd__title-4">Reason</h6>
                                    <h6>{state?.RejectionReason}</h6>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div class="row mt-10">
                    <div class="col-12">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Internal Comments</h6>
                            <h6>{state?.InternalNote || "NA"}</h6>
                        </div>
                    </div>
                </div>
                <div class="row mt-10">
                    <div class="col-12">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">External Comments</h6>
                            <h6>{state?.ExternalNote || "NA"}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
