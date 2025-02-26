let a = [1, 2, 5, 4, 6]
let b = [8, 2, 5, 9, 5]

for(let i in b){
    a.push(b[i])
}
a.sort()
console.log(a)
if(a.length % 2 === 0){
    console.log(a[Math.floor(a.length / 2)] + a[Math.floor(a.length / 2) + 1])
}
else{
    console.log(a[Math.floor(a.length / 2)])
}