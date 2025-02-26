function sequenceMember(n) {
    if (n === 1) {
        return 1;
    }

    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += sequenceMember(i);
    }

    return Math.sin(sum);
}

console.log(sequenceMember(3))
console.log(Math.sin(1 + Math.sin(1)))