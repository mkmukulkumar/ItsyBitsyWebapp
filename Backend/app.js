const dotenv = require("dotenv")
const express = require('express')
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser");


dotenv.config({path:'./config.env'})
const port = process.env.PORT
require('./db/conn')


app.use(
  cors({
    origin:"http://localhost:3000"
  })
)
//to use and show json format 
app.use(express.json())
app.use(cookieParser());


app.use(require('./router/auth'))

const User = require('./model/userSchema')


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 