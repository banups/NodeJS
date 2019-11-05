const express = require('express');
const app = express();
const moment = require('moment');
const bodyParser = require('body-parser');
const os = require('os');
const server = app.listen(8000, ()=>{
    console.log(`express running -> PORT+ ${server.address().port}`);
})


app.use("/javascripts", express.static("./javascripts"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    //console.dir(req,{depth:0})
    //res.send('hellooooo')
    res.render('index',{convdate:1234})
   // console.log(req.query.date)
})
app.post('/date',(req,res)=>{
    var dateval='';
    var datearray=req.body.title.split(",")
 for(var i=0;i<datearray.length;i++)
   dateval= dateval+"<br/>"+moment.unix(datearray[i]).format  ('dddd, MMMM Do, YYYY h:mm:ss A')
   // res.send(datearray.length)
   res.send("Converted date values are:"+dateval)
})


app.set('view engine','pug');