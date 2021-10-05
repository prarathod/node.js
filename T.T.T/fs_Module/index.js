// perform CURD operation using fs module
const fs = require('fs')

// // creating new file
// fs.writeFileSync('./hello.txt',"Hello my name is Prajwal N Rathod");


// // updation or appending new next to exiting file 
// fs.appendFileSync('./hello.txt',' I am a full stack web developer');


// // read the data from hello txt
// const hello = fs.readFileSync('./hello.txt')
// console.log(hello.toString())

// // if you don't want to use .toString() method then use this method 
// console.log(fs.readFileSync('./hello.txt','UTF-8'))


// //Rename the hello.txt to practiceFile.txt
// fs.renameSync('./hello.txt','./practiceFile.txt') 

// // dete the hello.txt
// fs.unlinkSync('./hello.txt')