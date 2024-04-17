

const express = require("express");
const { connect } = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const app = express()
app.use(express.json());

app.use(cors())

// -----Data-Base-----

async function connectToDB() {
    await connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDb is conneted!"))
        .catch(() => console.log("MogoDb is not conneted!"))
}

connectToDB();

app.get("/", (req, res) => {
    res.json("Salom Node.js")
})

//-----------Routes-----------

const user = require('./routes/userRoute');
app.use('/users' , user);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} portda ishga tushdi!`);
})