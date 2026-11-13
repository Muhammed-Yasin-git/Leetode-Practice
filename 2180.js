let countEven = function(num) {
    let count = 0
    for(let i = 1 ; i <= num ; i++){
        let digitSum = String(i).split("").reduce((sum,curr)=>{
            return sum + Number(curr)
        },0)
        if(digitSum % 2 === 0){
            count++
        }
    }
    return count
    
};

let num = 30;

console.log(countEven(num))