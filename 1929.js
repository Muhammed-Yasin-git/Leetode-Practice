let getConcatenation = function(nums) {
    let dupArr = []
    for(let i = 0 ; i < nums.length ; i++){
            dupArr.push(nums[i])
    }
    let res = [...dupArr , ...nums]
    return res
};

let arr = [1,2,1]

// getConcatenation(arr)