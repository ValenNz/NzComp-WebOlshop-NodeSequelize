const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const admin = require("./routes/admin")
app.use("/admin", admin)

const costumer = require("./routes/customer")
app.use("/customer", costumer)

app.listen(8000,() => {
    console.log("Your server run on port 8000")
})  