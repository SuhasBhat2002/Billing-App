const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const username= req.body.username
    const password = req.body.password;
    res.send(`You entered: ${username} as a username and ${password} as password`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })