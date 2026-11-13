let findGCD = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let gcd = 0
    for(let i = 1 ; i <= min ; i++){
        if(min % i == 0 && max % i == 0){
            gcd = i
        }
    }
    return gcd
};

let nums = [7,5,6,8,3]
console.log(findGCD(nums))