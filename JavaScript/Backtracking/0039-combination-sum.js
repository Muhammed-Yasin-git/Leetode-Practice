let combinationSum = function(candidates, target) {
    let result = []
    function backtrack(index, currentSum, currentArray){
        if(currentSum == target) {
            result.push([...currentArray]);
            return
        }

        if (currentSum > target){
            return;
        }
        for(let i = index ; i < candidates.length ; i++){
            currentArray.push(candidates[i])

            backtrack(i,currentSum + candidates[i], currentArray)

            currentArray.pop()
        }
    }

    backtrack(0,0,[]);

    return result
};


let candidates = [2, 3, 6, 7]
let target = 7

console.log(combinationSum(candidates, target))