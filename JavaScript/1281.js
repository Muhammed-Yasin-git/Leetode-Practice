let subtractProductAndSum = function(n) {
    let num = n.toString().split("")
    let product = 1;
    let sum = 0;

    for( let i = 0 ; i < num.length ; i++){
        sum += Number(num[i])
        product *= num[i]
    }
    return product - sum
};

let n = 4421
console.log(subtractProductAndSum(n))