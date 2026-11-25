let divide = (dividend, divisor) => {

    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let negative = (dividend < 0) !== (divisor < 0);

    let a = BigInt(Math.abs(dividend));
    let b = BigInt(Math.abs(divisor));

    let quotient = 0n;

    while (a >= b) {

        let temp = b;
        let multiple = 1n;

        while (a >= (temp << 1n)) {
            temp = temp << 1n;
            multiple = multiple << 1n;
        }

        a -= temp;
        quotient += multiple;
    }

    if (negative) {
        quotient = -quotient;
    }

    return Number(quotient);
};
const dividend = 10;
const divisor = 3;

console.log(divide(dividend,divisor))