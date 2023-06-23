const express = require('express');
const database = require('./database')
const apiRouter = require('./routes/index')

const app = express();

app.use(express.json())
app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log("server started at port: 3000");
})