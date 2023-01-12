export function sum(a, b) {

    // if (isNaN(a) || isNaN(b)) {
    //     throw new TypeError("You must provide a number.");
    // }

    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("You must provide a number.");
    }


    return a + b;
}