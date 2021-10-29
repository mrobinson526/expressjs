const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require("body-parser");
let app = express();
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'));
})
}); 
app.use((req, res, next) => {
    fs.appendFileSync('log.txt', `${req.url}\n`);
    next();
})
app.use(express.static(path.join(__dirname, '../public'))); 


app.use(bodyParser.urlencoded({extended: false}));
app.post("contact-form", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    res.send('Thank you for sending your contact form');
}) 



app.listen(3000);