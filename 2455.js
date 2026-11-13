let  averageValue = function(nums) {
    let count = 0
    let sumOfThree = 0

    for(let i = 0 ; i < nums.length ; i++){
        if( nums[i] %  2 === 0 && nums[i] % 3 === 0){
            sumOfThree += nums[i]
            count++
        }
    }
     if(count > 0){
        return Math.floor(sumOfThree / count)
     }
     return 0
};

let nums = [4,5,3,2,3,9,5,7,10,4]

console.log(averageValue(nums))