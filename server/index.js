const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { employeeRouter } = require("./src/routes/employeeDetails.js");

mongoose.set("strictQuery", false);

const app =  express();
app.use(express.json());
app.use(cors());

app.use("/", employeeRouter);

app.get("/test", (req,res) => {
    res.send("hellooo express");
})

const MONGO_URL = "mongodb+srv://lakrandiayeshani1204:MERNpassword123@cluster0.ubbizur.mongodb.net/beta-launch?retryWrites=true&w=majority";

async function connectDB() {
    await mongoose.connect(MONGO_URL);
}

connectDB().then(() => console.log("connected to the mongodb DB")).catch((err) => console.log("failed to connect DB: ",err))

app.listen(5000, () => console.log("Server is runnig on port 5000"))