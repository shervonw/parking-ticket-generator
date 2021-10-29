import { format } from "date-fns";

const formatTime = (date) => `at ${format(date, "hh:mm a")}`

export const formatDate = (date) => `${format(date, "MMM dd, yyyy")} ${formatTime(date)}`