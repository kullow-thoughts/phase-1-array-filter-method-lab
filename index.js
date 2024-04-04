// Code your solution here
function findMatching(driversArray, string){
    return driversArray.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(element => element.charAt(0) === string.charAt(0));
}
function matchName(driverObject, string){
        return driverObject.filter(element => element.name === string)
}