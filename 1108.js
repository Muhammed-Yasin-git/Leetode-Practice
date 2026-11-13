// let defangIPaddr = function(address) {
//     address = address.split("")
//     for(let i = 0 ; i < address.length ; i++){
//         if(address[i] === "."){
//             address.splice(i,1,"[.]")
//         }
//     }
//    return address.join("")
    
// };

//note: another way

let defangIPaddr = function(address) {
    return address.replaceAll("." , "[.]")
}    

let address = "1.1.1.1"
console.log(defangIPaddr(address))