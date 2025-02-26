function f(list){
    let a = list;
    let b = a.toSorted().reverse();

    let ok = true;

    for(let i in a){
        if(a[i] !== b[i]){
            console.log(a[i]);
            ok = false;
            break;
        }
    }
    if(ok){
        console.log(a)
    }
}

f([6, 5, 3, 4, 2, 1]); //wrong
f([6, 5, 4, 3, 2, 1]); //ok
