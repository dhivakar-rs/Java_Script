/*
//Hoisting
//variable hoisting

console.log(a)
var a = 10

console.log(b)
let b = 5

*/

//functionl hoisting

konguclg(3,7)
function konguclg(a,b){
    for(i=a;i<b;i++){
        if(i%2 == 0){
            console.log("This is even:",i)
        }
        else{
            console.log("This is odd:",i)
        }
    }
}