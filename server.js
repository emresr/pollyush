const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

app.use("/poll/", require("./api/routes/pollRouter.js"))

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
