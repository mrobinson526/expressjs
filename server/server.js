const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();
/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'));
})
}); */

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})
app.use(express.static(path.join(__dirname, '../public'))); 

app.listen(3000);