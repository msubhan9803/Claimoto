import React from 'react';
import moment from 'moment';

export default function ScheduledCall({ state }) {
    console.log("state: ", state)
    const _getFormattedTimeSlot = (timeSlot) => {
        let startDate = moment(timeSlot.substring(0, timeSlot.indexOf('To'))).format("hh:mm:ss a")
        let endDate = moment(timeSlot.substring(timeSlot.indexOf('To') + 2, timeSlot.length)).format("hh:mm:ss a")

        return startDate + " To " + endDate;
    }

    return (
        <div class="ltnd__block-item mt-30 mb-30">
            <div class="ltnd__space-between">
                <div class="ltnd__title ltnd__title-2">
                    <h4>Scheduled Call</h4>
                </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Details</h6>
                            <h6>{state.userProfile.UserName ? `Call with ${state?.userProfile?.FirstName} ${state?.userProfile?.LastName}` : ""}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Scheduled</h6>
                            <h6 data-toggle="tooltip" data-placement="left" title={moment(state?.TimeSlotDate).format("LL")}>{moment(state?.TimeSlotDate).fromNow()}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="policies-details-single-info">
                            <h6 class="ltnd__title-4">Time slot</h6>
                            <h6>{_getFormattedTimeSlot(state?.TimeSlot)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
