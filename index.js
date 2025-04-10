const express = require("express")
const req = require("express/lib/request")
const app = express()
const port = 8080

//Importing Router Modules
const userroute = require('./user/userrouter')
const commentroute = require('./comment/commentrouter')

//Middleware for Parsing JSON
app.use(express.json())

//Mounting Router Modules
app.use('/user', userroute)
app.use('/post', commentroute)

app.listen(port, () => {
    console.log("Server is running on " + port);
})