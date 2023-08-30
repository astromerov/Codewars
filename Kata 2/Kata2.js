/*

Complete the solution so that string splits into two characters, if the number of the character is in odd number add "_"

*/

function solution(str) {
    let arr = [];
    for (let i = 0; i < str.split('').length; i+= 2) {
        arr.push(str.slice(i, i+2))
    }
    return arr.map(v=>v.length===1?v+'_':v)
}




