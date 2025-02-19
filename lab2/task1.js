function func(a, b){
    console.log(func2(a, b));
}

function func2(a, b){
    return a - b;
}

func(10, 5)
console.log(func2(10, 5))