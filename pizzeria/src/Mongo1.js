var express=require("express");
var server=express();
var cors=require("cors");
const bodyParser = require('body-parser');
server.use(express.urlencoded({extended: false}))
server.use(express.static("public"));
server.use(cors());
server.use(bodyParser.json());
var mongodb = require("mongodb");

var mongoclient = mongodb.MongoClient;

var url = "mongodb://localhost:27017";

server.get('/fetchFruits',(req,res)=>{
   mongoclient.connect(url,(err,connectResult)=>{
        if(err){
            console.log(err)
        }
        else
        {
            var database=connectResult.db("training")
            database.collection("Pizza").find({}).toArray((collectionError,Data)=>{
                if(collectionError){
                    console.log("Error")
                }else
                {
                    console.log(Data)
                    res.send(Data)
                    res.end()
                }
            })
        }
    })
})







server.get('/fetchEmployee',(req,res)=>{
    var connect = mongoclient.connect(url, (err,connectResult) => {

        if (err) {
    
            console.log("Error while connecting with database"+err);
    
        }
        else {
    
            var database=connectResult.db("training")
            database.collection("Ingredients").find({}).toArray((collectionError,employeeData)=>{
                if(collectionError){
                    console.log("Error")
                }else
                {
                    console.log(employeeData)
                    res.send(employeeData)
                    res.end()
                }
            })
    
            
        }
    })
        
      
        
    })



server.post('/addEmployee',(req,res)=>{ 
    console.log(req.body[0])
    console.log(req.body[0].ename)
    var emp=req.body[0]
    
console.log(req.body[0].pname)
console.log(req.body[0].ptitle)
var connect = mongoclient.connect(url, (err,connectResult) => {

    if (err) {

        console.log("Error while connecting with database"+err);

    }
    else {

        var database=connectResult.db("training")
        database.collection("Pizza").insertOne(emp)

        //res.send("Data saved")
    }
})
    
   // res.send(`<h1>Welcome ${name}</h1>`);
    res.end();
})

server.listen(7000,()=>console.log("Server listening on port 7000!!"))