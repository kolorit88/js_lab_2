let arr = ["e1", "e2", "e3", "e4"];

console.log(arr[2]);
console.log(arr.length);
arr.splice(1, 1);
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}