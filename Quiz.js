let UniversalArray = [2, 3, 4, 5, 7, 8, 9, 10]



// const myArray = [1,2,3,4,5,10,6,8,9]
// function maxNum(myArray) {
//     return Math.max(...myArray)
// }
// console.log(maxNum(myArray))




// let reversed= []
// function rvrsArr(arr) {
//     for (let i = UniversalArray.length-1; i >= 0 ; i--){
//         reversed.push(arr[i]);
//     }
//     return reversed
// }
// let reversedarr = rvrsArr(UniversalArray)
// console.log(reversedarr)



// let squarArray = UniversalArray.map(function square(item) {
//     return item * item;
// }) 
// console.log(squarArray)


let myNewArray = UniversalArray.filter((item)=> item % 2 !==0)
console.log(myNewArray)


// let Sum = UniversalArray.reduce((acc , items) => acc + items,0)
// console.log(Sum)


// const User = [
//     {
//         UserName:"jhon",
//         age:20,
//     },
//     {
//         UserName:"khan",
//         age:33,
//     },
//     {
//         UserName:"Rocky",
//         age:23,
//     }
// ]
// function Names (user){
//     return User.map(user => user.UserName)
// }  
// let names = Names(User)
// console.log(names)

// const Users = [
//     { name: "khan", age: 60 },
//     { name: "ali", age: 16 },
//     { name: "jolly", age: 13 },
//     { name: "rocky", age: 23 },
//     { name: "akram", age: 34 },
//     { name: "moeen", age: 24 },
//     { name: "jabbar", age: 30 },
//     { name: "farhan", age: 40 },
// ]

// const UserAge = Users.filter((age) => age.age > 30)
// console.log(UserAge)


// const array =["apple" , "banana" , "apple" , " orange", "apple"];
// const counts = array.reduce((acc , curr) =>{
//     acc[curr] = (acc[curr] || 0 ) + 1;
//     return acc;
// },{});
// console.log(counts)



// const Users = [
//     { name: "khan", age: 60 },
//     { name: "ali", age: 16 },
//     { name: "jolly", age: 13 },
//     { name: "rocky", age: 23 },
//     { name: "akram", age: 34 },
//     { name: "moeen", age: 24 },
//     { name: "jabbar", age: 30 },
//     { name: "farhan", age: 40 },
// ]

// const OlderUsers = Users
//     .filter(items => items.age > 30)
//     .map(items => items.name)
// console.log(OlderUsers)




// obj1 ={name:"ali"}
// obj2={}
// function IsEmpty(obj){
//     const keys = Object.keys(obj)
//     if( keys.length === 0){
//        console.log("object is empty")
//        return true
//     } else{
//         console.log("not empty")
//         return true
//     }
// }
// console.log(IsEmpty(obj1))
// console.log(IsEmpty(obj2))



// const person =  {
//     name: "khan",
//     age: 30,
//     occupation: "teacher"
// }
//  function properties(obj) {
//     for(const key in obj){
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key} : ${obj[key]}`);
//         }
//     }
//  }
//  console.log(person)



// const person =  {
//     name: "khan",
//     age: 30,
//     occupation: "teacher"
// }

// const clone = cloneObject(person)
// function cloneObject(obj){
//     return {...obj}
    
// }
// console.log(clone)

// const obj1 =  {
//         name: "khan",
//         age: 30,
//         Address: "swat"
//     }
// const obj2 =  {
//         occupation: "Teacher",
//         contact: "034444",
//         Email: "abc@gmail.com"
//     }

//     function merge(obj1 , obj2){
//         return Object.assign({} , obj1, obj2)
//     }
//     const merged = merge( obj1 , obj2)
//     console.log(merged)



// const obj1 =  {
//         name: "khan",
//         age: 30,
//         Address: "swat"
//     }
//     function objKeys(obj){
//         return Object.keys(obj)
//     }
//     const ArrayKeys = objKeys(obj1)
//     console.log(ArrayKeys)



// const obj1 =  {
//         name: "khan",
//         age: 30,
//         Address: "swat"
//     }
//     function objValues(obj){
//         return Object.values(obj)
//     }
//     const ovbjectValues = objValues(obj1)
//     console.log(ovbjectValues)




// const obj1 =  {
//         name: "khan",
//         age: 30,
//         Address: "swat"
//     }
//     function objEntries(obj){
//         return Object.entries(obj)
//     }
//     const objectentries = objEntries(obj1)
//     console.log(objectentries)




// const person = {name:"ali" , age:29}
// const change = { age: 40 , location:"isb", Email:"google@gmail.com"}
// function UpdateProperty(acc , cur) {
//     return {...acc , ...cur}
// }

// const UpdatePerson = UpdateProperty(person ,change)
// console.log(UpdatePerson)



// function isPrime(number) {
//     if (number <= 0){
//         return false;
//     }  
//     for ( let i = 2 ; i <= Math.sqrt(number); i++){
//         if(number === 0)
//             return false;
//     }
//     return true;      
// }
// console.log(isPrime(0))
// console.log(isPrime(20))
// console.log(isPrime(19))





// let num = 1
// function factorial(n){
//     if(n < 0){
//         return undefined
//     }
//     for(let i = 1; i <= n; i ++ ){
//         num *= i;
//     }
//     return num;
// }
// console.log(factorial(13))




// let greet = "hello welcome here"
// function CapitalStr(str){
//     return str
//     .split('')
//     .map(word => word.charAt(0).toUpperCase() )
//     .join('')
// }
// let capitalizedGreet = CapitalStr(greet)
// console.log(capitalizedGreet)
