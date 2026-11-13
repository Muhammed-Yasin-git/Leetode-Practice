let furthestDistanceFromOrigin = function(moves) {
    let r = 0;
    let l = 0;
    let u = 0;
    for(let i = 0 ; i < moves.length ; i++){
        if(moves[i] == "L"){
            l++
        }else if( moves[i] === "R"){
            r++
        }else{
            u++
        }
    }
    if(r >= l){
        return Math.abs(r - l) + u
    }else{
        return Math.abs(r - l) + u 
    }
};

let moves = "_______"

console.log(furthestDistanceFromOrigin(moves))