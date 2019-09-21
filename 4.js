function fibonacci(col, row) {
    let
        i = 0,
        j = 2,
        fibo = [0, 1],
        result = [],
        finalResult = '';

    for (; i < row; i++) {
        for (; j < col; j++) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        }
        result.push(fibo);
        fibo = [
            result[i][result[i].length - 1] + result[i][result[i].length - 2],
            (result[i][result[i].length - 1] + result[i][result[i].length - 2]) + result[i][result[i].length - 1]
        ];

        j = 2;
        finalResult += result[i].join(',') + '\n';
    }

    return finalResult;
}

console.log(fibonacci(4, 3));