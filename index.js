const express = require("express")
const req = require("express/lib/request")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8080)