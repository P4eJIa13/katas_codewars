function printerError(s) {
//     if (s.match(/[n-z]/g) != null) {
//         return `${(s.match(/[n-z]/g)).length}/${s.length}`
//     }
//     return `${0}/${s.length}`
// }
    // return s.match(/[n-z]/g) != null ? `${(s.match(/[n-z]/g)).length}/${s.length}` : `${0}/${s.length}`;
    return `${s.match(/[n-z]/g) != null ? (s.match(/[n-z]/g)).length : 0}/${s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); // 3/56
console.log(printerError('aaabbbbhaijjjm'));