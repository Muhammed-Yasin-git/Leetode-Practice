let reduce = function(nums, fn, init) {
        let value = init
        for(let i = 0 ; i < nums.length ; i++){
            value = fn(value, nums[i])
        }

        return value
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
console.log(reduce(nums,fn,init))