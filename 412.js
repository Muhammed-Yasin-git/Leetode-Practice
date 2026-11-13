let fizzBuzz = function(n) {
    let newArr = []
    for(let i = 1; i <= n ; i++){
        if(  i % 3 == 0 && i % 5 == 0){
            newArr.push("FizzBuzz")
        }else if( i % 5 == 0){
            newArr.push("Buzz")
        }else if( i % 3 == 0){
            newArr.push("Fizz")
        }else{
            newArr.push("" + i + "")
        }
    }
     return newArr
};

console.log(fizzBuzz(15))