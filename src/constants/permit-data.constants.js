import { differenceInDays } from "date-fns"

export const PERMITS = [
  {
    issued: new Date("2021-08-31 16:41"),
    number: 4860491,
  },
  {
    issued: new Date("2021-09-19 20:16"),
    number: 4877924,
  },
  {
    issued: new Date("2021-10-06 20:07"),
    number: 4893524,
  }
]

let numberOfPermitsPurchased = 0;
let numberOfDaysSinceFirstPermitPurchased = 0;

for (const idx in PERMITS) {
  const index = Number(idx)

  if (index >= PERMITS.length - 1) {
    break
  }

  const issNo1 = PERMITS[index]
  const issNo2 = PERMITS[index + 1]

  numberOfPermitsPurchased += (issNo2.number - issNo1.number)
  numberOfDaysSinceFirstPermitPurchased += (differenceInDays(issNo2.issued, issNo1.issued))
}

const MINUTES_IN_DAY = 1440;
export const AVG_PERMIT_PER_MINUTE = (numberOfPermitsPurchased / numberOfDaysSinceFirstPermitPurchased) / MINUTES_IN_DAY;
