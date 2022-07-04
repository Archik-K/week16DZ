let matrix = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
for (let i of matrix) {
    if (i.length > 3) {
        alert(matrix.indexOf(i));
    }
}
