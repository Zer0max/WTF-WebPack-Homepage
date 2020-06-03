import moment from "moment"

let dateToshow = moment().startOf('day').fromNow();

console.log(`Date from ${dateToshow}`);

