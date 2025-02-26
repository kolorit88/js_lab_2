function max(a, b, c = -1000000000000){
    let max_num = 0
    if(a > b){
        max_num = a;
    }
    else{
        max_num = b;
    }
    if(c > max_num){
        return c;
    }
    return max_num
}

function ur(x,y,z){
    return (max(x, y) + max(x + y, z)) /
        ((max(0.5, x + z)) * (max(0.5, x + z)))
}

console.log(ur(2, 2, 8));