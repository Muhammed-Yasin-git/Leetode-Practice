let numberGame = function(nums) {
    nums = nums.sort((a,b)=> a - b)
    let res = []
    for(let i = 0 ; i < nums.length ; i+=2){
        res.push(nums[i+1] , nums[i])
    }
    return res
};


let nums = [5,4,2,3]
console.log(numberGame(nums))

