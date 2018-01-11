/**
 * Modify object a to join it with b and make the sum of each of the keys
 * @param {*} a
 * @param {*} source1
 *
 * @return {object}
 */

export default function sum(target) {
    for (var i = 1; i < arguments.length; i++) {
        let toSum = arguments[i];
        for (var key of Object.keys(toSum)) {
            if (target[key]) {
                target[key] += toSum[key];
            } else {
                target[key] = toSum[key];
            }
        }
    }
    return target;
}
