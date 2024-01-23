// OBJECTS
var customer_details = {
    "name": "English",
    "id": "21ECR115",
}//"," at end of  the last data is optional in JS
console.log(customer_details)
customer_details["phone"] = 999999999
console.log(customer_details)

// 2nd way
var obj = {}
obj["name"] = "Tamil_Mani"
obj["D_O_B"] = "02.04.2004"

console.log(obj)

// 3rd way
var kongu = new Object()
kongu["fees"]="high"
kongu["donation"]= 1000000
kongu["count"] = 10

console.log(kongu)