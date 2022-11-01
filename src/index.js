require("dotenv").config({})
const express = require("express")
const app = express();
const cors = require("cors");
const router = require("./routers/router");

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(process.env.PORT);
