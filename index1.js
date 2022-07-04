function sumInput() {
    let sum = 0;
    for (;;) {
        let meaning = +prompt("Добрый день!", "Пожалуйста, введите значение");

        if (meaning === "" || meaning === 0 || meaning === null || !isFinite(meaning)) {
            break;
        }
        sum += meaning;
    }
    return sum;
}
alert(sumInput());