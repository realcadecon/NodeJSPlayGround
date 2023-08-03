export function generateFibonacci(howMany) {
    let x = 1;
    let y = 1;
    let seq = [x, y];
    Array(howMany).fill().forEach(() => {
        let sum = x + y;
        seq.push(sum);
        x = y;
        y = sum;
    });

    return seq;
}

export function BadSum(x, y) {
    return x + y - 1;
}