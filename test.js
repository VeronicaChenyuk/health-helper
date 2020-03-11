// // const moment = require('moment-precise-range-plugin');
// const moment = require('moment');
// const precise = require('moment-precise-range')(moment);

// const date = new Date();
// const ex = new Date(2020, 2, 11, 18, 20, 0);
// console.log(date, ex);

// var bDt = moment("2/22/2009", "M/DD/YYYY");
// var eDt = moment("2/29/2016", "M/DD/YYYY");
// var dtDiff = precise.preciseDiff(bDt, eDt);
// // const res = moment.preciseDiff('2014-01-01 12:00:00', '2015-03-04 16:05:06');
// console.log(date - ex);
// console.log(dtDiff);
require('moment/package.json'); // moment is a peer dependency.
const momentPreciseRangePlugin = require('moment-precise-range-plugin');
const moment = require('moment');

const date = new Date();
const ex = new Date(2020, 2, 11, 18, 20, 0);
// const m1 = moment('2014-01-01 12:00:00', 'YYYY-MM-DD HH:mm:ss');
// const m2 = moment('2014-02-03 15:04:05', 'YYYY-MM-DD HH:mm:ss');
const diff = moment.preciseDiff(date, ex); // '1 month 2 days 3 hours 4 minutes 5 seconds'
console.log(diff);
