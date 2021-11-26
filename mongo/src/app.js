/*

1. require mongoose
2. connection
3. create a schema
4. create collecton
5. create document.
*/


// 1
const mongoose = require("mongoose")


// 2
mongoose.connect("mongodb://localhost:27017/ppp").then(()=>{
    console.log("success...")
}).catch((error)=>{
    console.log(error)
})


// 3
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:String,
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


// 4
const Product = new mongoose.model("Product",ProductSchema);



// 5
const createDocument = async ()=> {
    try{
        const tshart = new Product({
            name:"New black tshart with chain",
            category:"tsharts",
            price:1000,
        })
        const result = await tshart.save();
        console.log(result);
    }catch(error){
        console.log(error)
    }
}

createDocument()