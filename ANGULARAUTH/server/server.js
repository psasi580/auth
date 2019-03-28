const express=require('express')
const bodyPaser=require('body-parser')
const cors=require('cors');

const PORT=3000
const api=require('./routes/api')
//create instance of express
const app=express();
app.use(cors());
app.use(bodyPaser.json());
app.use('/api',api) 

app.get('/' ,function(req,res){
    res.send('hello from the server')

})
app.listen(PORT,function(){
    console.log("server runing on localHost:" + PORT)
})