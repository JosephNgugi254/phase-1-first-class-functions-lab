// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
    const newArray = [array[array.length -2 ],array[array.length - 1]]
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }

    return func(array)
}   