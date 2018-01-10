/**
 * Modify object a to join it with b and make the sum of each of the keys
 * @param {*} a
 * @param {*} b
 *
 * @return {object}
 */

export default function sum(a, b) {
    for (var key of Object.keys(b)) {
        if (a[key]) {
            a[key] += b[key];
        } else {
            a[key] = b[key];
        }
    }
    return a;
}
