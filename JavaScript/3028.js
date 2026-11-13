let returnToBoundaryCount = function(nums) {
    let count = 0;
    let getZero = 0;

    for(let i = 0 ; i < nums.length ; i++){
        getZero += nums[i]
        if(getZero == 0){
            count++
        }
    }
    return count
};

let nums = [3,2,-3,-4]

console.log(returnToBoundaryCount(nums))