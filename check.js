const express = require('express');
const MongoClient = require('mongodb').MongoClient
const client =new MongoClient("mongodb+srv://<username>:<password>@cluster0.rhm8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const app = express();
let db;

app.use(express.json());
app.get('/',(req,resp)=>{
    resp.send("Welcome To API");
})
client.connect().then((mClient)=>{
    const db=mClient.db();
app.get("/api/details", (req,resp)=>{
    db.collection('alpha').find({}).toArray((err,result)=>{
        if(err) throw err
        resp.send(result)
    })
})
});

app.listen(7000,()=>{
    MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.rhm8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true} , (error,result)=>{
        if(error) throw error
        result.db("myFirstDatabase");
        console.log("connection successful");
    }) 
})