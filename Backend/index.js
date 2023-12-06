const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())

const { DataBase } = require("./DBconnection")


app.listen(4500, () => {
    try {
        DataBase()
        console.log("Server is running on port 4500")
    } catch (error) {
        console.error(error)
    }

})


