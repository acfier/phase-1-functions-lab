// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
    return distance > 42 ? distance - 42 : 42 - distance; 
}

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet (start, destination) {
    const result = (destination - start) * 264;
        if (start > destination) {
            return result * -1
        } else {
            return result
        }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet (start, destination);
        if (distance <= 400) {
            return 0
        } if (distance > 400 && distance < 2000) {
            return (distance - 400) * .02
        } if (distance > 2000 && distance < 2500) {
            return 25
        } if (distance > 2500) {
            return 'cannot travel that far'
        }
}