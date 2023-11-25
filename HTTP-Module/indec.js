console.log("http working");

const https=require("http");


const server=https.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json");
    res.write("hellow World")
    res.end();
})

const PORT=5500;
server.listen(PORT,()=>{
    console.log("server started on port-->",PORT);
})

