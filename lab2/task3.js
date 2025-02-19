function max(a, b, c){
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
    return max_num;
}

console.log(max(5, 6, 7))