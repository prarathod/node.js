const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ppp").then(()=>{
    console.log("success")
}).catch((error)=>{
    console.log(error)
})

const prodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    type:String,
})

const Data = new mongoose.model("Data",prodSchema);

const ensetData = async ()=>{
    try{
        const p1 = {
            name:"J",
            age:19,
            type:"ski"
        };
        const p2 = {
            name:"s",
            age:23,
            type:"short"
        }
        const p3 = {
            name:"m",
            age:28,
            type:"b"
        }
        const p4 = {
            name:"h",
            age: 30,
            type:"b"
        }
        const p5 = {
            name: "ma",
            age: 35,
            type:"bb"
        }

        const result = await Data.insertMany([p1,p2,p3,p4,p5]);
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
// ensetData()

const getData =async ()=>{
     const result = await Data.find({name:"s"}).limit(1)
     console.log(result)
}

getData()