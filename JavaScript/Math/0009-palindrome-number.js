let isPalindrome = function(x) {
    let num  = x.toString().split("")
    let reversed = ""
    
    for(let i = num.length - 1 ; i >= 0 ; i--){
        reversed += num[i]
    }
    if(reversed == x){
        return true
    }
    return false
};

let x = -121

console.log(isPalindrome(x))