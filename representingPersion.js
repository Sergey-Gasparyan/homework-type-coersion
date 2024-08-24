// TASK 3
// 3.1
// const obj = {
//     firstName : "Sergey",
//     lastName : "Gasparyan",
//     age : 17
// } 

// obj.toString = function() {
//     return ` Name ${obj.firstName} ${obj.lastName} , Age : ${obj.age}`
// }



// 3.2
// const obj = {
//     price: 2500,
// }
// obj.valueOf = function() {
//     return obj.price
// }
// console.log(obj + 1500)



// 3.3
// const data = {
//     day: 18,
//     month : 8 ,
//     year : 2024
// }
// data.toString = function () {
//     let day = data.day > 10 ? data.day : `0${data.day}`
//     let month = data.month > 10 ? data.month : `0${data.month}`
//     return `${day} / ${month} / ${data.year}`
// }
// data.valueOf = function () {
//     return Date(100000)
// }
// console.log(+(data))




// 3.4
// const arrayLikeObj = {
//     0:"Item1",
//     1:"Item2",
//     2:"Item3"
// }

// arrayLikeObj.toString = function() {
//     return `${arrayLikeObj[0]},${arrayLikeObj[1]},${arrayLikeObj[2]} `
// }



// 3.5

// const bankAcc = {
//     balance: "1000$",
//     interestRate: "10%"
// }
// let year = 2
// bankAcc.valueOf = function () {
//     let balance = bankAcc.balance.slice(0,-1) 
//     let rate = bankAcc.interestRate.slice(0,-1)
//     balance = Math.floor(balance * (1 + rate / 100) ** year)
//     return balance    
// }
// console.log(Number(bankAcc))

