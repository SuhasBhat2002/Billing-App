const express = require('express')
const mysql = require('mysql');
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

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
  });

let Username; 
let Password; 
  
app.post('/submit', (req, res) => {
    Username = req.body.username; 
    Password = req.body.password;
    // res.send(`You entered: ${username} as a username and ${password} as password`);
    
    const data = {
        username: Username,
        password: Password
    }
    const sql = 'INSERT INTO details SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            console.error('SQL query error:', err);
            return;
        }
        console.log('Data added to the database');
        res.send('Data added to the database');
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })