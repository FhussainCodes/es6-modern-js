// import { fun1 } from "./sec.js";
// let a = "hello";
//  a = "bys"
// console.log(a);

// var a = 12;
// var a = 13;
// console.log(a);

// const b = 87;
// const b=34;
// console.log(b);

// function add(a,b){
//     console.log(a+b);
// }
// add(12,13);

// let add1 = function add(a,b){
//     console.log(a+b);
// }
// add1(12,13);

// let add = (a,b)=>{
//     // return a*b;
//     console.log(a*b);
// }
// add(2,3);

// let name = "farrukh";
// let age = 20;
// let data = `My name is ${name} and age is ${age} `;
// console.log(data);

// let fun1 = (a=10)=>{
//     console.log(a); 
// }
// fun1();

// let names = (...name)=>{
//     console.log(name);
    
// }

// names("farrukh", "hussain", "bhatti");

// let v1 = [2,4,6];
// let v2 = [...v1];
// v2.push(12);
// console.log(v1);
// console.log(v2);

// let user = {
//   name: "Ali",
//   age: 20
// };

// let { name: userName, age: userAge } = user;

// console.log(userName);
// console.log(userAge);

// let data = {
//     name: "hussain",
//     age: "20",
//     semester: 6,
//     program: "Bsit"
// }

// let {age,program} = data;

// console.log(age);
// console.log(program``);

// let arr1 = [1,2,3];
// let arr2 = arr1.map(a=>a*6);
// console.log(arr2);

// let arr3 = [6,7,8];
// let arr4 = arr3.filter(a=>a%2==0);
// console.log(arr4);

// let arr5 = [9,8,6];
// let arr6 = arr5.reduce((total,a)=>{
//     return total+a;
// })
// console.log(arr6);

// fun1(12);

// let val = [2,3,4,5,6];
// let iter = val[Symbol.iterator]();
// for(let i in val){
//     console.log(iter.next());
// }
// rompt("enter value")
    // let a = prompt("enter value");
    // console.log(a);
    
// let val = new Promise((resolve,reject)=>{
//     let a = 12;
//     if(a>12){
//         resolve("status is okk");
//     } 
//     else{
//         reject("status is not okk")
//     }

// });

// val
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// function hello() {
//     // console.log("hello world");
//     return `hello world`
// }

// async function getData() {
//     try {
//         let data = await hello();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getData();
// https://jsonplaceholder.typicode.com/todos

async function getJsonData() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos");
        let response = await data.json();
        // console.log(response);
        let final_data = response.map((value)=>{
            // return value.userId;s
            return value.title;
        })
        console.log(final_data);
        
        
    } catch (error) {
        console.log(error);
    }
}
getJsonData();
