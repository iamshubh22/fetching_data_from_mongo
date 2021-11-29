const {MongoClient} = require("mongodb");
const client =new MongoClient("mongodb+srv://<username>:<password>@cluster0.rhm8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
let db;
client.connect().then((mClient)=>{
    const db=mClient.db();
    db.collection("alpha")
    .insertOne({
    name :"Shubh Dwivedi",
    phone: "6268133546",
    email:"shubhdwivedimi@gmail.com",
    portfolio: "https://iamshubh22.github.io/PORTFOLIO/Portfolio/index.html"
})
    .then (()=>{
    console.log("data added");
    process.exit(0);
});

});
