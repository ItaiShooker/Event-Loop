const express = require('express')
var app = express()

const articles = require('./routes/articles');
app.use(express.json())

app.use('/api/articles', articles);

app.listen(8080)