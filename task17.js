let a = [1, 2, 3, 55, 66, 9999]

// function max(a){
//     let max_num = -Infinity;
//     for(let i in a){
//         if(a[i] > max_num){
//             max_num = a[i];
//         }
//     }
//     return max_num;
// }
//
// function min(a){
//     let min_num = +Infinity;
//     for(let i in a){
//         if(a[i] < min_num){
//             min_num = a[i];
//         }
//     }
//     return min_num;
// }

a.sort()
console.log(a)
let max = a[a.length - 1]
a[a.length - 1] = a[0]
a[0] = max

console.log(a)


