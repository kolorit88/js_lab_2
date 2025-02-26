const matrix = [
    [1, -3, 8, 12, -7],
    [5, 0, -2, 6, 10],
    [-6, 4, 9, -1, 3],
    [7, -8, 2, 5, -4],
    [11, -5, 0, 1, 2]
];

const result = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];

        if (element >= -5 && element <= 7) {
            result.push(element);
        }
    }
}

console.log(result);