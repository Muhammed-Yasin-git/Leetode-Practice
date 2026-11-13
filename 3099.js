let sumOfTheDigitsOfHarshadNumber = (num)=> {
    let digitSum = 0;
    let arr = num.toString().split("");
    
    for(let i = 0 ; i < arr.length ; i++){
        digitSum += Number(arr[i])
    }
    if(num % digitSum === 0){
        return digitSum
    }
    return -1
    
};

let x = 23;
console.log(sumOfTheDigitsOfHarshadNumber(x))