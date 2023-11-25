
const fs=require("fs");
fs.writeFileSync("input.txt","hello guys");
fs.renameSync("input.txt","test.txt");
fs.appendFileSync("test.txt"," qayyum bhai");
fs.readFile('test.txt',(err,data)=>{    
    if(err){
        return console.log(err);
    }
    console.log(data.toString());

});

fs.unlink("test.txt",(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("sucessfull deleted file");
})