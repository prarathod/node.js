const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ppp").then(()=>{
    console.log("success...")
}).catch((error)=>{
    console.log(error)
})

const Prod = new mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    age:Number,
    type:String
})

const Produce = new mongoose.model("Product",Prod)

const createDoc = async ()=>{
    try{
        const mal = new Produce({
            name:"dy",
            age:35,
            type:"bb"
        })
        const mal2 = new Produce({
            name:"Le",
            age:30,
            type:"b"
        })
        const result = await Produce.insertMany([mal,mal2])

        console.log(result)
    }catch(error){
        console.log(error)
    }
}

createDoc()