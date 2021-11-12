const dotenv = require("dotenv")
const express = require('express')
const app = express()

dotenv.config({path:'./config.env'})
require('./db/conn')

//to use and show json format 
app.use(express.json())

app.use(require('./router/auth'))

const port = process.env.PORT
const User = require('./model/userSchema')


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 