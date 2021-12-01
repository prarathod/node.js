/* banking question cha data banvaych aahe

question
author
year
dificutly
*/

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/bank").then(()=>{
    console.log("successfull...")
}).catch((err)=>{
    console.log(err)
})

const bankSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    author:String,
    year:Number,
    dificulty:{
        type:String,
        default:"undefind"
    }
});

const BankData = new mongoose.model("BankData",bankSchema);

const createDocumant = async()=>{
    try{
        const q1 = {
            question:"addiion of two",
            author:"admin",
            year:2011,
            dificulty:"easy"
        }

        const result = await BankData.insertMany([q1]);
        console.log(result);
    }catch(error){
        console.log(error)
    }
}
// createDocumant()

const showData = async ()=>{
    let result = await BankData.find({year:{$gte:2012}});
    console.log(result)
}
showData()