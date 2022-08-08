// function isLeapYear (year){

// const remainder = year % 4;
// if(remainder  === 0) {
//     return true;

// }
// else{
//     return false;
// }

// }
function isLeapYear (year){

const remainder = year % 4;
if(remainder  === 0) {
    return true;

}
    return false;

}

const isMyYearLeapYear = isLeapYear(1887);
console.log('my year:', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(2020);
console.log('my year:', isHerYearLeapYear);