const fs = require('fs');
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 4321

const server = http.createServer( (req,res)=>{
    if(req.url==="/"){
        res.setHeader(200,{
            'Context-Type':'text/html'
        })
        a = fs.readFile(path.join(__dirname,'public/index.html'),(err , data)=>{
            res.end(data)
        });
    }else if(req.url==='/about'){
        fs.readFile('./about.html',(err,data)=>{
            res.end(data)
        })

    }else if(req.url==="/thankyou"){
        fs.readFile('./thankyou.html',(err,data)=>{
            res.end(data)
        })
    }else{
        res.end('something wrong 404 error')
    }
});


server.listen(PORT , ()=>{
    console.log(`Litning from port ${PORT}`)
})
