const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();

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


/* Advanced */

app.get('/formsubmission', function(req, res) {
    res.render('form');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(express.static('public'));
app.post('/formsubmission', function(req, res){
    console.log(req.body);
    res.send("Recieved your request");
});





app.listen(3000);