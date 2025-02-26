const matrix = [
    [1.5, 2.3, 3.7],
    [4.2, 0.8, 5.1],
    [6.4, 7.2, 1.9]
];

const M = matrix.length;
const N = matrix[0].length;

let sumOfMaxInRows = 0;
for (let i = 0; i < M; i++) {
    const maxInRow = Math.max(...matrix[i]);
    sumOfMaxInRows += maxInRow;
}

let productOfMinInColumns = 1;
for (let j = 0; j < N; j++) {
    let minInColumn = matrix[0][j];
    for (let i = 1; i < M; i++) {
        if (matrix[i][j] < minInColumn) {
            minInColumn = matrix[i][j];
        }
    }
    productOfMinInColumns *= minInColumn;
}

console.log("Сумма наибольших значений элементов строк:", sumOfMaxInRows);
console.log("Произведение наименьших значений элементов столбцов:", productOfMinInColumns);