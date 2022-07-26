// import part
const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

//1 Create->post method
//2 Read->get method
//3 Update->put method                    this is called CRUD operation
//4 Delete->delete method

// create express server Api

app.listen(5000,()=>{
    console.log("server is start");
})

// to create Api use postman, postman is Api handler
// request-> frontend madhun data jato 
// response-> data stored hoto to data ghenyasthi
// app.get("/:userID",(req , res)=>{
// const userNo = req.params.userID;// params=userID-is dynamic value genrates
// res.send(`Hello Wellcome To Postman ${userNo}`); 
// })
app.use(cors());// connect frontend
app.use(express.json());// mention to express use json format
app.use("/user",require("./routes/user"));// conect router 
// connection database

conn.connection.on("connected",(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Connected MongoDb");
    }
})