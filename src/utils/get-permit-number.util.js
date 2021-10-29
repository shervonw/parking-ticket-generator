import { differenceInMinutes } from "date-fns"

import { AVG_PERMIT_PER_MINUTE, PERMITS } from "../constants"

export const getPermitNumber = (date) => {
  const [, lastPermit] = PERMITS;
  const minutesPastSinceLastPermit = differenceInMinutes(date, lastPermit.issued)
  return Math.ceil(lastPermit.number + (minutesPastSinceLastPermit * AVG_PERMIT_PER_MINUTE))
}