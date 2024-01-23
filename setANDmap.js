set_example = new Set("Ramesh","Suresh","Rajesh")
// console.log(set_example)
set_example = new Set(["Ramesh","Suresh","Rajesh"])
// console.log(set_example)

for (var i in set_example) {
    console.log(set_example[i])
}
// set values couldnt displayed by using for in but can be displayed in for of

//MAP
map_ex = new Map([
    ["name","Tamilmani"],
    ["id","21ecr115"]
])
console.log(map_ex)
// for (var i in map_ex) {
//     console.log(map_ex[i])
// }

// map values couldnt displayed by using for in but can be displayed in for of
map_ex.set("rollno:","79")
map_ex.set("personality:","small-boy")

console.log(map_ex)
map_ex.delete("personality:","small-boy")

console.log(map_ex)
 