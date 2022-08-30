// Code your solution in this file!
const returnFirstTwoDrivers = (myArray) => {
    return myArray.slice(0,2);
}

const returnLastTwoDrivers = (myArray) => {
    return myArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(myInt) {
    return myInt2 => {
        return myInt2 * myInt;
    }
}

const fareDoubler = myFare => {
    return createFareMultiplier(2)(myFare);
}

const fareTripler = myFare => {
    return createFareMultiplier(3)(myFare);
}

function selectDifferentDrivers(DArray, myFunction){
    return myFunction(DArray);
}