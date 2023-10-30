// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    if (number > 42) {
        return number - 42;
    } else if (number < 42) {
        return 42 - number;
    }
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(number1, number2) {
    if (number2 > number1) {
        return ((number2 - number1) * 264);
    } else if (number1 > number2) {
        return ((number1 - number2) * 264);
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start,destination) - 400) * .02);
    } else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start,destination) > 2500) {
        return "cannot travel that far";
    }
}