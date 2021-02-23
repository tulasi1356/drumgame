const express=require('express');
const username=require('./main')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const router=express.Router()
var finalscore;
router.get('/' , function(req,res){
   finalscore=req.body.score
  console.log("drums",req.body)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb1");
    var myquery = { name:username };
    // var details;
    var newvalues = { $set: {score:finalscore} };
    console.log("updated values",newvalues)
    dbo.collection("customers1").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
  });
  res.send(JSON.stringify(req.body.score))
})
router.post('/' , function(req,res){
  finalscore=req.body.score
 console.log("drums",req.body)
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb1");
   var myquery = { name:username};
   var newvalues = { $set: {score:finalscore} };
   console.log("updated valuestygfdvcx",newvalues)
   dbo.collection("customers1").updateOne(myquery, newvalues, function(err, res1) {

     if (err) throw err;
     console.log("1 document jewdjbsajmxnzb");
     console.log("res",res1);
     
 res.send(JSON.stringify(res1))

   });
 });
})
module.exports = router