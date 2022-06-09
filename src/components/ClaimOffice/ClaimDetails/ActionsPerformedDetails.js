import React from 'react';
import RemarksCard from "./ActionPerformedCards/RemarksCard.js";
import AssignedToAgencyGarage from "./ActionPerformedCards/AssignedToAgencyGarage.js";
import ScheduledCall from "./ActionPerformedCards/ScheduledCall.js";

export default function ActionsPerformedDetails({ state }) {
    return (
        <>
            {/* REJECTED */}
            {
                state?.ClaimStatusId === 19 && <RemarksCard state={state} isApproved={false} />
            }
            {/* APPROVED */}
            {
                state?.ClaimStatusId === 11 && <RemarksCard state={state} isApproved={true} />
            }
            {/* ASSIGN TO GARAGE/AGENCY */}
            {
                state?.AgencyGarageId !== 0 && state?.AgencyGarageBranchId !== 0 && <AssignedToAgencyGarage state={state} />
            }
            {/* SCHEDULED CALLS */}
            {
                state?.TimeSlot && <ScheduledCall state={state} />
            }
        </>
    )
}