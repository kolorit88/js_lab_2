let a = [1, 2, 3, -4, -5, -6]

for(let i in a){
    if(a[i] > 0 && i % 2 !== 0){
        a[i] = a[i] * 3;
    }
    else if(a[i] < 0 && i % 2 === 0){
        a[i] = a[i] / 5;
    }
}

console.log(a)