let differenceOfSum = function(nums) {
    let numsTotal = nums.reduce((sum,value)=>{
        return sum + value
    },0)
    let x = nums.join("")
    let singleDigitSum = x.split("").reduce((sum , value)=> {
        return sum + Number(value)
    },0)
   return numsTotal - singleDigitSum
    
};

let nums = [1,2,3,4]
console.log(differenceOfSum(nums))