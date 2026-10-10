/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
    let cars = [];

    for (let i = 0; i < position.length; i++) {
        let time = (target - position[i]) / speed[i];

        cars.push([position[i], time]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let maxTime = 0;

    for (let i = 0; i < cars.length; i++) {
        let time = cars[i][1];

        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
    }

    return fleets;
};
