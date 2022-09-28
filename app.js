const express = require("express");
const cors = require("cors");
const router = require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// Allow body
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(cors());

// Connect database
const DBURI = `mongodb+srv://admin:admin5575@cluster0.xhknkrh.mongodb.net/hotelManagementApplication`;
mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongodb connected"));
mongoose.connection.on("error", (error) => console.log(error));

// all routes
app.use(router);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));