/*

You have n number of classmates and m number of bookpages.
Your task:
is to calculate how many number of blank pages are there to print.

 */

// Solution 1 (JavaScript)

function print(n, m) {
    if (n < 0 || m < 0) return 0;
    return n * m;
}


// Solution 2 JavaScript
function print(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n*m;
    }
}


