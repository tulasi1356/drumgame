const express=require('express');
const app=express();
const score=require('./score')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var cookieParser = require('cookie-parser');
const bodyparser=require('body-parser')
const path=require('path')
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'dist/drums')))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/score',score)
var username;
app.post('/main',function(req,res){
    console.log("data",req.body)
     username=req.body.name
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb1");
var myobj = { name: username,score:0 };
console.log("myobj",myobj)
dbo.collection("customers1").insertOne(myobj, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
  // db.close();
});
});
// app.get('/main',function(req,res){
//   console.log("service",myobj)
//   res.send(myobj)
// })
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sujokmoksha@gmail.com',
    pass: 'sujok@123,'
  }
});

var mailOptions = {
  from: 'gamespirit@gmail.com',
  to: 'sudharshanbadireddi@gmail.com',
  subject: 'this is test mail  ',
  text: 'That was easy!',
  html:'Embedded image: <img src="cid:unique@kreata.ee"/> <p>req.body.name</p>',
  
  attachments: [{
      filename: 'ff.jpg',
      path: './ff.jpg',
      cid: 'unique@kreata.ee'
      // img src`
    }],
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.send(JSON.stringify("it's works"))

})
app.get('/*',function(req,res){
  res.sendFile(__dirname+'/dist/drums/index.html')
})
module.exports=username
app.listen(4000)

