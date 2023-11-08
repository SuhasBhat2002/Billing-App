const express = require('express')
const mysql = require('mysql');
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'bill',
});

db.connect((err)=>{
  if(err){
    console.log('Database connection error:', err);
    return;
  }
  console.log('Connected to the database')
})

app.post('/addData',(req,res)=>{
  
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
